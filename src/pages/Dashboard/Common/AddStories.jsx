import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";
import AddStoryForm from "../../../components/Form/AddStoryForm/AddStoryForm";
const AddStories = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const [uploadImage, setUploadImage] = useState([])

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const name = form.name.value;
        const description = form.description.value;
        const images = form.images.files;

        const imageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const imageUrl = await imageUpload(images[i]);
            imageUrls.push(imageUrl);
        }

        const storiesData = {
            name, description, images: imageUrls, email: user?.email
        }
        console.table(storiesData)

        try {
            await axiosSecure.post('/add-story', storiesData)
            toast.success('Data Added Successfully!')
            // navigate('/dashboard/my-inventory')
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
            <AddStoryForm handleSubmit={handleSubmit} uploadImage={uploadImage} setUploadImage={setUploadImage} loading={loading}></AddStoryForm>

        </div>
    );
};

export default AddStories;