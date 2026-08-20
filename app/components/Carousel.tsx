"use client"

import { useState, type MouseEventHandler, type ReactNode } from "react"
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface CarouselProps {
    slides: ReactNode[]
}

function AutoplayPlugin(slider: KeenSliderInstance) {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    function clearNextTimeout() {
        clearTimeout(timeout)
    }

    function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
            slider.next()
        }, 3000)
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
        })
        nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
}

export function Carousel({ slides }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [slideCount, setSlideCount] = useState(0)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            slides: {
                perView: 1,
                spacing: 15,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created(slider) {
                setLoaded(true)
                setSlideCount(slider.track.details.slides.length)
            },
            updated(slider) {
                setSlideCount(slider.track.details.slides.length)
            },
        },
        [AutoplayPlugin]
    )

    return (
        <>
            <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                    {slides.map((slide, index) => (
                        <div className="keen-slider__slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>

                {loaded && (
                    <>
                        <Arrow
                            left
                            onClick={(event) => {
                                event.stopPropagation()
                                instanceRef.current?.prev()
                            }}
                            disabled={false}
                        />
                        <Arrow
                            onClick={(event) => {
                                event.stopPropagation()
                                instanceRef.current?.next()
                            }}
                            disabled={false}
                        />
                    </>
                )}
            </div>

            {loaded && (
                <div className="flex justify-center gap-2 mt-4">
                    {[...Array(slideCount).keys()].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-2 h-2 rounded-full transition-opacity ${
                                currentSlide === idx
                                    ? "bg-gray-300"
                                    : "bg-white"
                            }`}
                            aria-label={`Ir para slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: MouseEventHandler<SVGSVGElement>
}) {
    return (
        <svg
            onClick={props.disabled ? undefined : props.onClick}
            className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer fill-white hover:fill-gray-300 transition-colors ${
                props.left ? "left-2" : "right-2"
            } ${props.disabled ? "opacity-30 cursor-not-allowed pointer-events-none" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
