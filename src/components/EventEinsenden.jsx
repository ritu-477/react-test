import React, { useState } from "react";
import Icon from '../utils/icons'
import Heading from '../common/Heading'
import Description from '../common/Description';

const EventEinsenden = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        date: "",
        location: "",
        price: "",
        details: "",
    });
    const [selectedImages, setSelectedImages] = useState([]);
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
        console.log(formData);
    };
    const handleImageChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...newImages]);
    };
    const triggerFileInput = () => {
        document.getElementById("imageInput").click();
    };
    return (
        <div className="flex justify-center items-center bg-light-gray lg:py-[60px] py-12">
            <div className="container">
                <Heading classStyle={'text-center'} text={'Event einsenden'} />
                <Description classStyle={'text-center lg:pt-5 pt-4'} text={'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'} />
                <div className="md:max-w-[768px] mx-auto w-full">
                    <form onSubmit={handleSubmit}   >
                        <div className="flex items-center gap-4 p-[15.2px] bg-white rounded-[30px] border-[0.5px] border-dashed border-light-blue mt-5">
                            {selectedImages.map((image, index) => (
                                <img key={index} className="sm:size-24 size-16 rounded-3xl overflow-hidden" src={image} alt={`Selected Image ${index + 1}`} />))}
                            <button type="button" onClick={triggerFileInput} className="sm:w-24 sm:h-20 h-14 w-16 rounded-[20px] flex items-center justify-center border-[0.5px] border-dashed border-gray-200 cursor-pointer hover:bg-gray-100">
                                <span className="text-2xl text-blue-500">+</span>                            </button>
                        </div>
                        <input id="imageInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} multiple />
                        <div className="px-4 w-full border-light-blue border-[0.5px] flex justify-between items-center py-[17.5px] rounded-[30px] bg-white relative my-5">
                            <input className="w-full outline-none text-sm font-bold leading-custom-2xl placeholder:text-gray" type="text" name="category" placeholder="Kategorie" value={formData.category} onChange={handleChange} />
                            <img src="/assets/images/svg/dropdown-vector.svg" className="cursor-pointer" alt="" onClick={toggleDropdown} />
                            {showDropdown && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-light-blue rounded-lg shadow-md">
                                    <ul className="list-none p-2 text-gray">
                                        <li className="p-2 cursor-pointer text-gray text-sm leading-custom-2xl font-bold" onClick={() => setFormData({ ...formData, category: "Food" })}>Food
                                        </li>
                                        <li className="p-2 cursor-pointer text-gray text-sm leading-custom-2xl font-bold"
                                            onClick={() => setFormData({ ...formData, category: "Travel" })}> Travel
                                        </li>
                                        <li className="p-2 cursor-pointer  text-gray text-sm leading-custom-2xl font-bold"
                                            onClick={() => setFormData({ ...formData, category: "Cloths" })}> Cloths
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-5 pb-5 max-md:flex-col">
                            <input className="px-4 w-full border-light-blue placeholder:text-gray border-[0.5px] py-[17.5px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none" type="text" name="title" placeholder="Titel" value={formData.title} onChange={handleChange} />
                            <input className="px-4 w-full border-light-blue placeholder:text-gray border-[0.5px] py-[17.5px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none"
                                type="text" name="date" placeholder="Datum" value={formData.date} onChange={handleChange} />
                        </div>
                        <div className="flex gap-5 pb-5 max-md:flex-col">
                            <input className="px-4 border-light-blue placeholder:text-gray border-[0.5px] py-[17.5px] rounded-[30px] bg-white text-sm leading-custom-2xl font-bold text-gray outline-none md:w-[50%] w-full"
                                type="text" name="location" placeholder="Standort" value={formData.location} onChange={handleChange} />
                            <input className="px-4 border-light-blue placeholder:text-gray border-[0.5px] py-[17.5px] rounded-[30px] md:w-[50%] text-sm leading-custom-2xl font-bold text-gray outline-none w-full"
                                type="text" name="preis" placeholder="Preis" value={formData.price} onChange={handleChange} />
                        </div>
                        <textarea className="w-full pt-12 pb-9 max-sm:pt-10 max-sm:pb-5 placeholder:text-gray font-bold resize-none outline-none text-gray text-sm leading-custom-2xl border-light-blue border-[0.5px] rounded-[30px] bg-white px-4"
                            placeholder="Details zur Veranstaltung" name="details" value={formData.details} onChange={handleChange}></textarea>
                        <button className="py-4 px-[115px] mt-5 max-sm:px-0 max-sm:w-full text-center rounded-[30px] mx-auto bg-custom-gradient sm:flex font-bold text-white">
                            Event einsenden </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default EventEinsenden;
