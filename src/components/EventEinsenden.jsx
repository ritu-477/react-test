import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2"; 
import Heading from "../common/Heading";
import Description from "../common/Description";

const EventEinsenden = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        date: "",
        location: "",
        preis: "",
        details: "",
    });
    const [selectedImages, setSelectedImages] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

        Swal.fire({
            icon: "success",
            title: "Event Submitted!",
            text: "Your event has been successfully submitted.",
        });

        setFormData({
            category: "",
            title: "",
            date: "",
            location: "",
            preis: "",
            details: "",
        });
        setSelectedImages([]);
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) =>
            URL.createObjectURL(file)
        );
        setSelectedImages([...selectedImages, ...newImages]);
    };

    const fileInput = () => {
        document.getElementById("imageInput").click();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-center items-center bg-light-gray lg:py-[60px] py-12">
            <div className="container">
                <Heading
                    classStyle={"text-center"}
                    text={"Event einsenden"}
                />
                <Description
                    classStyle={"text-center lg:pt-5 pt-4"}
                    text={
                        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    }
                />
                <div className="md:max-w-[768px] mx-auto w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center gap-4 p-[15.2px] bg-white rounded-[30px] border-[0.5px] border-dashed border-light-blue mt-5">
                            {selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    className="sm:w-24 sm:h-20 h-14 w-16 rounded-3xl overflow-hidden"
                                    src={image}
                                    alt={`Selected Image ${index + 1}`}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={fileInput}
                                className="sm:w-24 sm:h-20 h-14 w-16 rounded-[20px] flex items-center justify-center border-[0.5px] border-dashed border-gray-200 cursor-pointer hover:bg-gray-100"
                            >
                                <span className="text-2xl text-blue-500">+</span>
                            </button>
                        </div>
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                            multiple
                        />
                        <div
                            className="relative px-4 w-full border-light-blue border-[0.5px] flex justify-between items-center py-[16.7px] rounded-[30px] bg-white my-5"
                            ref={dropdownRef}
                        >
                            <input
                                required
                                className="w-full outline-none text-sm font-bold leading-custom-2xl placeholder:text-gray text-gray"
                                type="text"
                                name="category"
                                placeholder="Kategorie"
                                value={formData.category}
                                onClick={toggleDropdown}
                                readOnly
                            />
                            <img
                                src="/assets/images/svg/dropdown-vector.svg"
                                className="cursor-pointer"
                                alt=""
                                onClick={toggleDropdown}
                            />
                            {showDropdown && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-full bg-white border border-light-blue rounded-lg shadow-md z-10"
                                >
                                    <ul className="list-none p-2 text-gray">
                                        {["Option-1", "Option-2", "Option-3"].map((option) => (
                                            <li
                                                key={option}
                                                className="p-2 cursor-pointer text-gray text-sm leading-custom-2xl font-bold hover:bg-gray-100"
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        category: option,
                                                    });
                                                    setShowDropdown(false);
                                                }}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-5 pb-5 max-md:flex-col">
                            <input
                                required
                                className="px-4 w-full border-light-blue placeholder:text-gray border-[0.5px] py-[16.7px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none"
                                type="text"
                                name="title"
                                placeholder="Titel"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            <input
                                required
                                className="px-4 w-full border-light-blue placeholder:text-gray border-[0.5px] py-[16.7px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none"
                                type="text"
                                name="date"
                                placeholder="Datum"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex gap-5 pb-5 max-md:flex-col">
                            <input
                                required
                                className="px-4 border-light-blue placeholder:text-gray border-[0.5px] py-[16.7px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none md:w-[50%] w-full"
                                type="text"
                                name="location"
                                placeholder="Standort"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            <input
                                required
                                className="px-4 border-light-blue placeholder:text-gray border-[0.5px] py-[16.7px] rounded-[30px] md:w-[50%] text-sm leading-custom-2xl font-bold text-gray outline-none w-full"
                                type="text"
                                name="preis"
                                placeholder="Preis"
                                value={formData.preis}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            required
                            className="w-full pt-[49px] pb-[39.5px] max-sm:pt-10 max-sm:pb-5 placeholder:text-gray font-bold resize-none outline-none text-gray text-sm leading-custom-2xl border-light-blue border-[0.5px] rounded-[30px] bg-white px-4"
                            placeholder="Details zur Veranstaltung"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                        ></textarea>
                        <button className="py-4 px-[115px] mt-5 max-sm:px-0 max-sm:w-full text-center rounded-[30px] mx-auto bg-custom-gradient sm:flex font-bold text-white transition duration-700 hover:scale-105">
                            Event einsenden
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventEinsenden;
