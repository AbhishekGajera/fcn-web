import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateProduct, ImageUpload } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";

const AddVideo = () => {
    const [cookies] = useCookies(["user"]);
    const history = useHistory();

    const handleUpload = (e) => {
        e.preventDefault()
        const element = document.getElementById('input-id');
        if (element) {
            element.click()
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        getValues,
    } = useForm({
        mode: "onChange",
    });

    const values = getValues();

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("user", cookies?.user?.id)
        formData.append("image", data?.file[0])
        const fileResult = await ImageUpload(formData)
        return;
        if (fileResult.error) {
            toast.error(fileResult.error.message);
        } else {
            try {
                await CreateProduct(formData);
                toast.success("Add Video successfully");
                history.push("/video/addVideo");
            } catch (error) {
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(process.env.REACT_APP_ERROR_MESSAGE);
                }
            }
        }
    }

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title">Video / Add Video </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                                {cookies?.user?.role} Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Add Video
                        </li>
                    </ol>
                </nav>
            </div>
            <div
                className="row auth"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-sample" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                                <p className="card-description"> Add Video </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">Category</label>
                                            <div className="col-sm-8 d-flex align-item-center">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="category" id="optionsRadios1" value="free" />
                                                        <i className="input-helper"></i>
                                                        Free
                                                    </label>
                                                </div>
                                                <div className="form-check ml-3">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="category" id="optionsRadios2" value="paid" defaultChecked />
                                                        <i className="input-helper"></i>
                                                        Paid
                                                    </label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">
                                                Upload Video{" "}</label>

                                            <div className="col-sm-8">
                                                <Form.Control
                                                    id="input-id"
                                                    className="d-none"
                                                    type="file"
                                                    name="file"
                                                    accept="video/mp4,video/x-m4v,video/*"
                                                    multiple={false}
                                                    {...register("file", { required: true })}
                                                />

                                                <button
                                                    onClick={handleUpload}
                                                    className={`btn btn-outline-${values?.file?.[0]?.name ? " btn-primary" : " btn-primary"
                                                        }`}
                                                >
                                                    {values?.file?.[0]?.name ? values?.file?.[0]?.name : "Upload Video"}
                                                </button>
                                                {errors && errors.file && (
                                                    <p>Upload Video is required field</p>
                                                )}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div
                                    className="mt-3"
                                    style={{ display: "flex", justifyContent: "center" }}
                                >
                                    <button
                                        className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                                        type="submit"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideo;
