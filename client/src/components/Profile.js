
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { getDepartements, getProfile } from "../redux/action";
import NavBar from "./NavBar";

const Profile = () => {
    const {user}=useSelector((state)=>state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfile());
      }, []);
      useEffect(() => {
        dispatch(getDepartements());
      }, []);
     
     
    return (
        <div className="container">
            <div className="main-body">


             <NavBar/>

                <div className="row gutters-sm">
                    <div className="col-md-4 mb-10">
                        <div className="card">
                            <div className="card-body-profil">
                                <div className="d-flex flex-column align-items-center text-center mt-5">
                                    <img src={user.image} alt="" className="rounded-circle" width="150" />
                                    <div className="mt-5">

                                        <h4> BIENVENUE <br/>
                                            {` ${user.nom} ${user.prenom}`}</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Nom</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    {`${user.nom}`}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Prénom</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    {`${user.prenom}`}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {`${user.email}`}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Téléphone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    {`${user.numTel}`}
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                        {`${user.adresse}`}
                                        </div>
                                    </div>
                                    
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Département</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                        {`${user.département}`}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Contrat</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                        {`${user.contrat}`}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info "  href={`/editUser/${user._id}`}>Modifier</a>
                                           
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}
export default Profile;