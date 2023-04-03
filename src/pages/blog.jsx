import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as GrIcons from "react-icons/gr";
// import { getComments as getCommentsApi, } from "../api";
import "../assets/styles/Post.css";
import { Link } from 'react-router-dom';
import { DownCircleOutlined, InstagramFilled } from '@ant-design/icons';
import Projects from '../components/projects';

export default function Blog() {
  const [APIData, setAPIData] = useState([])
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState('all');
  const [loading, setLoading] = useState(true);

  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
  // const { user } = useContext(Context)

  useEffect(() => {

    const BLOG_API = "https://blog-9i5d.onrender.comn";

    const showPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setAPIData(data.blog);
        console.log(data);

      } catch (error) {
        const data = 0
        setAPIData(data);
        console.log(error);
        setLoading(false);


      } finally {
        setLoading(false);
      }
    };
    showPosts();




    // getCommentsApi().then((data) => {
    //   setBackendComments(data);
    // });
  }, [])
  function addLikes(adde, param) {
    like = param;
    setLike(like);
    selects = false;
    setSelect(selects);
    console.log(selects);
  }


  return (
    <>
      <div className='bg-info text-light p-5 text-center'>
        <h4 className='pt-5 text-primary'>The Latest News and Insights on Construction Industry</h4>
        <h4 className='mt-4'>
          <div style={{ width: '80px' }} className='  d-flex gap-2 mx-auto'>
            <a className='' href="">Blog/News </a>
            <div className='d-flex'><DownCircleOutlined className='my-auto text-primary' /></div>
          </div>
        </h4>
      </div>
      {loading &&
        (
          <div className="d-flex loading-post d-block w-100 justify-content-center bg-danker">
            <div className="d-flex loading-post w-50">
              <div className="spinner-grow m-3 text-success "></div>
              <div className="spinner-grow m-3 text-warning"></div>
              <div className="spinner-grow m-3 text-primary"></div>
            </div>
            <div className="d-flex loading-post w-50">
              <div className="spinner-grow m-3 text-success "></div>
              <div className="spinner-grow m-3 text-warning"></div>
              <div className="spinner-grow m-3 text-primary"></div>
            </div>
          </div>
        )}
      {!loading && APIData.length >= 1 &&
        < div style={{ padding: 20 }}>

          <div className='d-flex' style={{ marginTop: 20, flexDirection: 'column', justifyContent: 'center' }}>
            {APIData.length > 1 && (
              APIData.map(
                (value, index) => {
                  const { _id, image } = value;
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(image.data.data))
                  );
                  return (
                    <div key={index} className="post bg-white">
                      <img
                        className="posting"
                        // src={blogimg}
                        src={`data:image/png;base64,${base64String}`}
                        alt=""
                      />
                      <div className="postinfo">
                        <div className="post-p">
                          <div className="postcats w-100">
                            <span className="postcats">{value.category}</span>
                          </div>

                        </div>
                        <span className="posttitle fw-bold w-100">{value.title}</span>
                        <span className="posted w-100">
                          {new Date(value.updatedAt).toDateString()}
                        </span>
                        <p className="postdesc">
                          <Link to={`/post/${index}`} className="text-dark">
                            {value.story}
                          </Link>
                        </p>
                        {/* {selects == false && ( */}
                        {/* <div className="d-flex justify-content-between w-100">
                          <strong className="">{like.length - 2} Like</strong>
                          <strong className=""><span>{backendComments.length}</span> Comment</strong>
                        </div> */}
                        {/* )} */}

                        <nav id="" className="like">
                          <div className="likes ">
                            <div id="changeLike" className="rounded-pill narbar btn">
                              <button onClick={(eve) => addLikes(eve, "❤️")}>
                                ❤️
                              </button>
                              <button onClick={(eve) => addLikes(eve, "👍")}>
                                👍
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😂")}>
                                😂
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😘")}>
                                😘
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😡")}>
                                😡
                              </button>
                            </div>
                            <button className="likeB btn-likeB bg-light">
                              {like}
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  );
                }
              )
            )}
          </div>

        </div>

      }

      {
        !loading && APIData <= 0 &&
        <div>
          <h1 className="alert alert-info p-2 ">Check your internet connection...📡</h1>
        </div>
      }
      {/* <Projects /> */}

    </>
  )
}