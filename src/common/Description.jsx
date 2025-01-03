const Description = ({ text, classStyle }) => {
    return (
        <p className={`sm:text-xl sm:leading-custom-3xl text-base font-thin lg:max-w-[768px] mx-auto text-gray ${classStyle}`}>{text}</p>
    )
}

export default Description