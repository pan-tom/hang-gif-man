import React, { useEffect, useRef, useState } from 'react';

const loadingSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjBweCIgIGhlaWdodD0iNjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEwMS44ODEgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvc3ZnPg==';

export default ({ gameResult, numFails }) => {

    const ref = useRef();

    const src = gameResult === 'succeed'
        ? '/media/success'
        : `/media/fail${numFails}`;
    const alt = gameResult === 'succeed'
        ? 'Success'
        : `Fails: ${numFails}`;

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = ref.current;
        if(img) {
            setIsLoaded(false);
            new IntersectionObserver((entries, observer) => {
                if(entries[0].intersectionRatio) {
                    observer.unobserve(img);
                    setIsLoaded(true);
                }
            }).observe(img);
        }
    }, [src]);

    return (
        <>
            <picture>
                {isLoaded && (
                    <>
                        <source type="image/webp" srcSet={`${src}.webp`} />
                        <source type="image/gif" srcSet={`${src}.gif`} />
                    </>
                )}
                <img
                    ref={ref}
                    alt={alt}
                    src={isLoaded ? `${src}.gif` : loadingSrc}
                />
            </picture>
        </>
    )
};
