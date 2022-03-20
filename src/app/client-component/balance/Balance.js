import React from 'react'
import Modal from "react-bootstrap/Modal";
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
const Balance = () => {
  // const [show, setShow] = React.useState(false);
  // const [show1, setShow1] = React.useState(false);


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  
  // const handleClose1 = () => setShow(false);
  // const handleShow1 = () => setShow(true);
  // const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
  //   mode: "onChange"
  // });
  // const onSubmit = async (data) => {
  // alert(data.name1)
  // };
  // const { registerData, handleSubmit1, formState: { errors1 , isDirty1, isValid1 } } = useForm({
  //   mode: "onChange"
  // });
  // const onSubmit1 = async (data) => {
  // alert(data.name1)
  // };
  return (
    <div>
      <Deposit/>
     
      </div>
  )
}

export default Balance