const Icons = ({ iconName, classStyle }) => {
    const IconsList = {
        doubleArrow: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        ),

    };

    return (
        <span className={`flex ${classStyle}`}>
            {iconName && IconsList[iconName]}
        </span>
    );
};

export default Icons;