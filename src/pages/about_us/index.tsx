import React, { useEffect, useState } from 'react';
import Layout from '@/src/components/Layout';

export default function AboutUs() {
    return (
        <Layout>
        <div className='main-blog-container'>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Us</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Empowering Your Future Through the Science of Dreams</p>
                    <p className="mb-4">The International Dreams Institute is a renowned organization that specializes in the study of dreams. With decades of research and development, our team of expert scientists and researchers have made groundbreaking discoveries in the field of dream analysis, and our advanced technology has helped countless people decode the messages hidden within their dreams. Our mission is to help individuals gain a deeper understanding of their subconscious mind, tap into their inner wisdom, and unlock their full potential. Join us on this journey of self-discovery and explore the limitless possibilities of the human mind with the International Dreams Institute.</p>

                </div>
            </section>
            <section id="rmtcontent" className="">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission Statement</h2>
                        <p className="mb-4">
                        At the International Dreams Institute, our mission is to unlock the power of dreams and provide a deeper understanding of the human subconscious. We believe that dreams are more than just illusions of the mind - they hold valuable insights into our thoughts, emotions, and desires. Our vision is to revolutionize the field of dream studies and use advanced technologies to help people unlock their full potential and achieve their dreams. Through years of research and development, we have created Onirix, an innovative dream analysis platform that uses artificial intelligence to provide personalized premonitory predictions. Join us on this exciting journey and discover the power of your dreams.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1n0GqerWP04Grl7W1u15ACNrbhPIw-Qox" alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1KSVMLucdvtuxxGOmTCY-ZcywdJp45lqo" alt="office content 2"/>
                    </div>
                </div>
            </section>
            <section id="rmtcontent" className="">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1LxhvAsD9boesMIco0CESslIRwxA5jm2F" alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1jrIquFyGsaV0x0uyMZ0rpj2CAUWxXxvC" alt="office content 2"/>
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Vision</h2>
                        <p className="mb-4">The International Dreams Institute envisions a world where dreams are not just a source of wonder and curiosity but also a tool for personal growth and transformation. We believe that by exploring and understanding the messages of our dreams, we can tap into our inner wisdom, discover new possibilities, and create a better future for ourselves and for the world around us. We are dedicated to advancing the field of dream studies and developing innovative technologies and programs that help people unlock the power of their dreams.</p>
                    </div>
                </div>
            </section>
            <section id="rmtcontent" className="">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Value</h2>
                        <p className="mb-4">The International Dreams Institute values the exploration of the subconscious mind, and believes that by understanding our dreams, we can gain a deeper understanding of ourselves and our place in the world. We are dedicated to advancing the field of dream studies through cutting-edge research and development, and strive to empower individuals to unlock the power of their dreams and achieve their full potential.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1ThzFhuaoVgTHHuP1SfVwa7Z68JwTGKU8" alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1bq3SdE0R2pZ_kmqNJZOIwF_P6ml1KuDg" alt="office content 2"/>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
    );
}