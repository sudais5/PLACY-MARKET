import React from "react"
import './blogs.css'
import blogimgmain from '../assets/blogsimg.png'
import bloglist1 from '../assets/bloglist1.png'
import bloglist2 from '../assets/bloglist2.png'
import bloglist3 from '../assets/bloglist3.png'

function Blogs(){
    return(<>
    <div className="main-blogs">
        <div className="title-blog"> 
            <h1>Articles</h1>
            <p>Stay informed with expert articles and blogs on marketplace trends, rental tips, and business growth strategies.</p>
        </div>

        <div className="content-blog">
            <div className="content-first-block">
                <div className="content-img">
                    <img src={blogimgmain} alt="" />
                </div>
                <div className="front-blog-content">
                    <div className="front-blog-conent-title">
                        <h1>The Future of Marketplace<br />Rentals: Trends to Watch</h1>
                        <p>August 22.2025</p>
                    </div>
                    <p>Stay ahead with the latest marketplace trends, from digital transformation to flexible rental models, helping vendors and owners adapt and grow their businesses.</p>
                </div>
            </div>
            <div className="content-second-block">
                <div className="blogs-list1">
                    <div className="blog-list-info">
                        <h3>Maximizing Sales in a Shared Marketplace</h3>
                        <p>Proven strategies to attract more customers and boost revenue ..</p>
                        <p>August 22.2025</p>
                    </div>
                    <div className="blog-list-img">
                            <img src={bloglist1} alt="" />
                    </div>
                </div>
                <div className="blogs-list2">
                    <div className="blog-list-info">
                        <h3>Essential Legal Tips for Renting a Commercial Space</h3>
                        <p>Understanding contracts, lease terms, and tenant rights ...</p>
                        <p>August 22.2025</p>
                    </div>
                    <div className="blog-list-img">
                            <img src={bloglist2} alt="" />
                    </div>
                </div>
                <div className="blogs-list3">
                    <div className="blog-list-info">
                        <h3>The Future of Marketplace Rentals: Trends to Watch</h3>
                        <p>The Future of Marketplace Rentals: Trends to Watch</p>
                        <p>August 22.2025</p>
                    </div>
                    <div className="blog-list-img">
                            <img src={bloglist3} alt="" />
                    </div>
                </div>
            </div>
            

        </div>
    </div>

    </>)
} export default Blogs