import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";
import AddPackageForm from "../../../components/Form/AddPackageForm/AddPackageForm";

const AddPackage = () => {
    const { user } = useAuth()
    // const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const [uploadImage, setUploadImage] = useState([])

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const name = form.name.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value)
        const images = form.images.files;

        const imageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const imageUrl = await imageUpload(images[i]);
            imageUrls.push(imageUrl);
        }

        const plantData = {
            name, category, price, images: imageUrls
        }
        console.table(plantData)

        try {
            await axiosSecure.post('/packages', plantData)
            toast.success('Data Added Successfully!')
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <Helmet>
                <title>TravelSphere | AddPackage</title>
            </Helmet>
            <AddPackageForm handleSubmit={handleSubmit} uploadImage={uploadImage} setUploadImage={setUploadImage} loading={loading}></AddPackageForm>

        </div>
    );
};

export default AddPackage;