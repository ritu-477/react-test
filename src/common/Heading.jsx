const Heading = ({ classStyle, text,}) => {
    return (
        <h2 className={`${classStyle} font-bold text-3xl text-black md:text-4xl md:leading-custom-4xl`}>{text}</h2>
    )
}

export default Heading