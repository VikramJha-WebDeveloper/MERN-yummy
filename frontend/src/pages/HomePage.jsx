import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Stats from "../components/Stats";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";
import Events from "../components/Events";
import Chefs from "../components/Chefs";
import BookTable from "../components/BookTable";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const HomePage = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState("");

  useEffect(()=>{
    setIsLoading(true)
    fetch("https://mern-yummy-backend.onrender.com/me", {
      method: "GET",
      credentials: "include",
    }).then((response)=>{
      setIsLoading(false);
      return response.json();
    }).then((data)=>{
      console.log(data);
      if(data.errorMessage){
        console.log(data.errorMessage);
        navigate("/login");
      }else if(data.message){
        console.log(data.message);
        console.log(data.user);
        setUser(data.user);
      }else{ 
        toast.error("something went wrong during verification")
      }
    })
  }, []);

  const logout = async (e) => {
      setIsLoading(true);
      try {
          const response = await fetch("https://mern-yummy-backend.onrender.com/logout", {
            method: "GET",
            credentials: "include",
          });
          const result = await response.json();
          setIsLoading(false);
          console.log(result);
          if (result.message) {
            toast.success(result.message);
            navigate("/login");
          } else {
            toast.error("Something goes wrong");
          }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
  return ( 
    isLoading?<><div className="border vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div></>:
    <> 
      <Navbar user={user} logout={logout}/>
      <Hero></Hero>
      <About></About>
      <Choose></Choose>
      <Stats></Stats>
      <Menu></Menu>
      <Testimonials></Testimonials>
      <Events></Events>
      <Chefs></Chefs>
      <BookTable></BookTable>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
