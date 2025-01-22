import { useForm } from 'react-hook-form';
import { usePlayerData } from '../hooks/useHome';
import { FormData } from '../Types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const PlayerData = usePlayerData();
 const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
 
 const onSubmit = (data:FormData) => {
  // @ts-ignore
  PlayerData.mutate(data);
  console.log(data);
};


 return (
  <>
    <div className="main-content">
      <Header/>
      <div className="container">
        <h2 className="mb-4">Inquiries</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-sec">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fname" className="form-label">First Name<span className="text-danger">*</span> </label>
                <input {...register("first_name", { required: true })} type="text" id="fname" className="form-control" placeholder="Enter Your First Name" />
                {errors.first_name && <p className='text-danger'>This field is required</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lname" className="form-label">Last Name<span className="text-danger">*</span> </label>
                <input {...register("last_name", { required: true })} type="text" id="lname" className="form-control" placeholder="Enter Your Last Name" />
                {errors.last_name && <p className='text-danger'>This field is required</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company<span className="text-danger">*</span> </label>
                <input {...register("company", { required: true })} type="text" id="company" className="form-control" placeholder="Your Company" />
                {errors.company && <p className='text-danger'>This field is required</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="title" className="form-label">Title</label>
                <input {...register("title")} type="text" id="title" className="form-control" placeholder="Your Title" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="emailContact" className="form-label">Email<span className="text-danger">*</span> </label>
                <input {...register("email", { required: true })} type="email" id="emailContact" className="form-control" placeholder="Enter Your Email" />
                {errors.email && <p className='text-danger'>This field is required</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone<span className="text-danger">*</span> </label>
                <input {...register("phone", { required: true })} type="text" id="phone" className="form-control" placeholder="Your Phone Number" />
                {errors.mobile && <p className='text-danger'>This field is required</p>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comments" className="form-label">Message</label>
              <textarea {...register("comments")} id="comments" className="form-control" placeholder="Additional Comments" rows={5} />
            </div>
            <div className="form-group mb-0 text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      <Footer/>
    </>
 );
};

export default Contact;
