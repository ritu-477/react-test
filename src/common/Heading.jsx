const Heading = ({ classStyle, text,}) => {
    return (
        <h2 className={`${classStyle} font-bold text-custom-xl leading-9 text-black md:text-4xl md:leading-custom-4xl`}>{text}</h2>
    )
}

export default Heading