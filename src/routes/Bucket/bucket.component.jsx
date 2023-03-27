import { Route, Routes } from "react-router-dom";
import BucketPreview from "../../components/bucket-preview/bucket-preview.component";
// import Bu

const Bucket = () => {
    return (
        <Routes>
            <Route path=":bucketId" element={<BucketPreview />} />
        </Routes>
    );
}

export default Bucket;