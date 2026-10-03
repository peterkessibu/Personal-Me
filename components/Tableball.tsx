"use client"

import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "@/lib/use-media-query"

const COLOR = "#FFFFFF"
const HIT_COLOR = "#333333"
const BACKGROUND_COLOR = "#000000"
const BALL_COLOR = "#9333ea"
const PADDLE_COLOR = "#FFFFFF"
const LETTER_SPACING = 1
const WORD_SPACING = 1.5

const PIXEL_MAP = {
    P: [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
    ],
    R: [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ],
    O: [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ],
    M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    T: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
    ],
    G: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
    ],
    S: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [1, 1, 1, 1],
    ],
    A: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    L: [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    Y: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    U: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ],
    D: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    E: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    B: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    C: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    ",": [
        [0, 0],
        [0, 0],
        [0, 1],
        [0, 1],
        [1, 0],
    ],
}

interface Pixel {
    x: number
    y: number
    size: number
    hit: boolean
}

interface Ball {
    x: number
    y: number
    dx: number
    dy: number
    radius: number
}

interface Paddle {
    x: number
    y: number
    width: number
    height: number
    targetY: number
    isVertical: boolean
}

export function TableBallGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const pixelsRef = useRef<Pixel[]>([])
    const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
    const paddlesRef = useRef<Paddle[]>([])
    const scaleRef = useRef(1)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            const container = containerRef.current
            const targetWidth = container ? container.clientWidth : window.innerWidth
            const targetHeight = container ? container.clientHeight : Math.min(560, window.innerHeight * 0.6)
            canvas.width = targetWidth
            canvas.height = targetHeight
            scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
            initializeGame()
        }

        const initializeGame = () => {
            const scale = scaleRef.current
            const LARGE_PIXEL_SIZE = 8 * scale
            const SMALL_PIXEL_SIZE = 4 * scale
            const BALL_SPEED = 6 * scale

            pixelsRef.current = []
            const words = ["AS I BUILD,", "I CREATE"]

            const calculateWordWidth = (word: string, pixelSize: number) => {
                return (
                    word.split("").reduce((width, letter) => {
                        const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
                        return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
                    }, 0) -
                    LETTER_SPACING * pixelSize
                )
            }

            const measureLine = (line: string, pixelSize: number) => {
                return line.split(" ").reduce((width, word, index) => {
                    return width + calculateWordWidth(word, pixelSize) + (index > 0 ? WORD_SPACING * pixelSize : 0)
                }, 0)
            }

            const totalWidthLarge = measureLine(words[0], LARGE_PIXEL_SIZE)
            const totalWidthSmall = measureLine(words[1], SMALL_PIXEL_SIZE)
            const totalWidth = Math.max(totalWidthLarge, totalWidthSmall)
            const scaleFactor = ((canvas.width * 0.8) / totalWidth) * 0.95

            const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
            const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

            const largeTextHeight = 5 * adjustedLargePixelSize
            const smallTextHeight = 5 * adjustedSmallPixelSize
            const spaceBetweenLines = 5 * adjustedLargePixelSize
            const totalTextHeight = largeTextHeight + spaceBetweenLines + smallTextHeight

            let startY = (canvas.height - totalTextHeight) / 2

            words.forEach((word, wordIndex) => {
                const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
                const totalWidth = measureLine(word, pixelSize)

                let startX = (canvas.width - totalWidth) / 2

                word.split(" ").forEach((subWord) => {
                    subWord.split("").forEach((letter) => {
                        const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
                        if (!pixelMap) return

                        for (let i = 0; i < pixelMap.length; i++) {
                            for (let j = 0; j < pixelMap[i].length; j++) {
                                if (pixelMap[i][j]) {
                                    const x = startX + j * pixelSize
                                    const y = startY + i * pixelSize
                                    pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
                                }
                            }
                        }
                        startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
                    })
                    startX += WORD_SPACING * pixelSize
                })
                startY += wordIndex === 0 ? largeTextHeight + spaceBetweenLines : 0
            })

            // Initialize ball position near the top right corner
            const ballStartX = canvas.width * 0.9
            const ballStartY = canvas.height * 0.1

            ballRef.current = {
                x: ballStartX,
                y: ballStartY,
                dx: -BALL_SPEED,
                dy: BALL_SPEED,
                radius: adjustedLargePixelSize / 2,
            }

            const paddleWidth = adjustedLargePixelSize
            const paddleLength = 10 * adjustedLargePixelSize

            paddlesRef.current = [
                {
                    x: 0,
                    y: canvas.height / 2 - paddleLength / 2,
                    width: paddleWidth,
                    height: paddleLength,
                    targetY: canvas.height / 2 - paddleLength / 2,
                    isVertical: true,
                },
                {
                    x: canvas.width - paddleWidth,
                    y: canvas.height / 2 - paddleLength / 2,
                    width: paddleWidth,
                    height: paddleLength,
                    targetY: canvas.height / 2 - paddleLength / 2,
                    isVertical: true,
                },
                {
                    x: canvas.width / 2 - paddleLength / 2,
                    y: 0,
                    width: paddleLength,
                    height: paddleWidth,
                    targetY: canvas.width / 2 - paddleLength / 2,
                    isVertical: false,
                },
                {
                    x: canvas.width / 2 - paddleLength / 2,
                    y: canvas.height - paddleWidth,
                    width: paddleLength,
                    height: paddleWidth,
                    targetY: canvas.width / 2 - paddleLength / 2,
                    isVertical: false,
                },
            ]
        }

        const updateGame = () => {
            const ball = ballRef.current
            const paddles = paddlesRef.current

            ball.x += ball.dx
            ball.y += ball.dy

            if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
                ball.dy = -ball.dy
            }
            if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
                ball.dx = -ball.dx
            }

            paddles.forEach((paddle) => {
                if (paddle.isVertical) {
                    if (
                        ball.x - ball.radius < paddle.x + paddle.width &&
                        ball.x + ball.radius > paddle.x &&
                        ball.y > paddle.y &&
                        ball.y < paddle.y + paddle.height
                    ) {
                        ball.dx = -ball.dx
                    }
                } else {
                    if (
                        ball.y - ball.radius < paddle.y + paddle.height &&
                        ball.y + ball.radius > paddle.y &&
                        ball.x > paddle.x &&
                        ball.x < paddle.x + paddle.width
                    ) {
                        ball.dy = -ball.dy
                    }
                }
            })

            paddles.forEach((paddle) => {
                if (paddle.isVertical) {
                    paddle.targetY = ball.y - paddle.height / 2
                    paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
                    paddle.y += (paddle.targetY - paddle.y) * 0.1
                } else {
                    paddle.targetY = ball.x - paddle.width / 2
                    paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
                    paddle.x += (paddle.targetY - paddle.x) * 0.1
                }
            })

            pixelsRef.current.forEach((pixel) => {
                if (
                    !pixel.hit &&
                    ball.x + ball.radius > pixel.x &&
                    ball.x - ball.radius < pixel.x + pixel.size &&
                    ball.y + ball.radius > pixel.y &&
                    ball.y - ball.radius < pixel.y + pixel.size
                ) {
                    pixel.hit = true
                    const centerX = pixel.x + pixel.size / 2
                    const centerY = pixel.y + pixel.size / 2
                    if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
                        ball.dx = -ball.dx
                    } else {
                        ball.dy = -ball.dy
                    }
                }
            })
        }

        const drawGame = () => {
            if (!ctx) return

            ctx.fillStyle = BACKGROUND_COLOR
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            pixelsRef.current.forEach((pixel) => {
                ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
                ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
            })

            ctx.fillStyle = BALL_COLOR
            ctx.beginPath()
            ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = PADDLE_COLOR
            paddlesRef.current.forEach((paddle) => {
                ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
            })
        }

        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        let raf = 0

        const render = () => {
            if (!motionQuery.matches) updateGame()
            drawGame()
            if (!motionQuery.matches) raf = requestAnimationFrame(render)
        }

        const onResize = () => {
            resizeCanvas()
            drawGame()
        }

        const onMotionChange = () => {
            cancelAnimationFrame(raf)
            if (motionQuery.matches) drawGame()
            else raf = requestAnimationFrame(render)
        }

        resizeCanvas()
        render()
        window.addEventListener("resize", onResize)
        motionQuery.addEventListener("change", onMotionChange)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("resize", onResize)
            motionQuery.removeEventListener("change", onMotionChange)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative h-full w-full">
            <canvas
                ref={canvasRef}
                className="block h-full w-full"
                aria-label="AS I BUILD, I CREATE"
            />
        </div>
    )
}

export function TableballSection() {
    const desktop = useMediaQuery("(min-width: 768px)")
    const [open, setOpen] = useState(false)
    const show = desktop || open

    return (
        <section id="tableball" className="scroll-mt-24 py-14 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        Tableball
                    </h2>
                    <button
                        type="button"
                        className="inline-flex h-11 items-center rounded-full border border-border bg-surface px-4 text-base md:hidden"
                        aria-expanded={open}
                        onClick={() => setOpen((value) => !value)}
                    >
                        {open ? "Hide" : "Play"}
                    </button>
                </div>
                <div
                    className={`mt-6 h-[520px] overflow-hidden rounded-[14px] border border-border bg-black ${
                        show ? "block" : "hidden md:block"
                    }`}
                >
                    {show ? <TableBallGame /> : null}
                </div>
            </div>
        </section>
    )
}

export default TableballSection;
