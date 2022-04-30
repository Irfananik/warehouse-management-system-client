import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h2 className="my-4" style={{ color: 'white' }}>Blogs</h2>
            <div classNameName="container my-5">
                <div className="card my-5 container d-flex alig-items-center justify-content-center">
                    <div className="container d-flex alig-items-center justify-content-center my-5">
                        <img src={'https://i.ibb.co/g6mFJFF/node.jpg'} className="card-img-top w-25" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-2" style={{ color: '#6C757D', fontWeight: 'bold' }}> Difference between javascript and nodejs</h4>
                        <p className="card-text" style={{ color: '#6C757D' }}>
                            <div className="my-3" style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>Javascript:</span>
                                <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                                <li>Javascript can only be run in the browsers.</li>
                                <li>It is basically used on the client-side.</li>
                                <li>Javascript is used in frontend development.</li>
                                <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</li>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>NodeJS:</span>
                                <li>NodeJS is a Javascript runtime environment.</li>
                                <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                                <li>It is mostly used on the server-side.</li>
                                <li>Nodejs is used in server-side development.</li>
                                <li>Nodejs is written in C, C++ and Javascript.</li>
                            </div>
                        </p>
                        <Link style={{ textDecoration: 'none' }} to='/'>See More</Link>
                    </div>
                </div>
            </div>

            <div classNameName="container my-5">
                <div className="card my-5 container d-flex alig-items-center justify-content-center">
                    <div className="container d-flex alig-items-center justify-content-center my-5">
                        <img src={'https://i.ibb.co/hmRF4zb/mongodb-1.jpg'} className="card-img-top w-25" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-2" style={{ color: '#6C757D', fontWeight: 'bold' }}> When should you use nodejs and when should you use mongodb</h4>
                        <p className="card-text" style={{ color: '#6C757D' }}>
                            <div className="my-3" style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>NodeJS:</span>
                                <p>As you see, there are quite a lot of cases where the use of Node.js will add to your application performance and reliability. At the same time, when musing about why we use Node.js in web development, we should also mention other aspects that belong to the organizational rather than technical matters.

                                    Of course, when selecting the technology stack for your project you should also think of engaging experienced professionals who know the tools and platforms that you choose and can use them to the maximum benefit of your app. If you already have a Node.js pro on board, you are all set. However, if the technology is right for your idea but you still need to find the people to work with it, we have some good news for you.
                                </p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>Mongodb:</span>
                                <p>MongoDB is a general-purpose database used in various ways to support applications in many different industries telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development
                                </p>
                                <p>If you are bringing together tens or hundreds of data sources, the flexibility and power of the document model can create a single unified view in ways that other databases cannot. MongoDB has succeeded in bringing such projects to life when approaches using other databases have failed.
                                </p>
                                <p>
                                    Document databases allow embedding of documents to describe nested structures and easily tolerate variations in data in generations of documents. Specialized data formats like geospatial are efficiently supported. This results in a resilient repository that doesn’t break or need to be redesigned every time something changes.
                                </p>

                            </div>
                        </p>
                        <Link style={{ textDecoration: 'none' }} to='/'>See More</Link>
                    </div>
                </div>
            </div>

            <div classNameName="container my-5">
                <div className="card my-5 container d-flex alig-items-center justify-content-center">
                    <div className="container d-flex alig-items-center justify-content-center my-5">
                        <img src={'https://i.ibb.co/2sgRdHr/No-SQL-vs-SQL-01-1.jpg'} className="card-img-top w-25" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-2" style={{ color: '#6C757D', fontWeight: 'bold' }}> Differences between sql and nosql databases.</h4>
                        <p className="card-text" style={{ color: '#6C757D' }}>
                            <div className="my-3" style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>SQL:</span>
                                <li>Relational database management system.</li>
                                <li>These databases have fixed or static or predefined schema.</li>
                                <li>These databases are not suited for hierarchical data storage.</li>
                                <li>These databases are best suited for complex queries.</li>
                                <li>Follows ACID property</li>
                                <li>Vertically Scalable</li>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>Non-SQL:</span>
                                <li>Non-relational or distributed database system.</li>
                                <li>They have dynamic schema.</li>
                                <li>These databases are best suited for hierarchical data storage.</li>
                                <li>These databases are not so good for complex queries.</li>
                                <li>Follows CAP(consistency, availability, partition tolerance)</li>
                                <li>Horizontally scalable</li>
                            </div>
                        </p>
                        <Link style={{ textDecoration: 'none' }} to='/'>See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;