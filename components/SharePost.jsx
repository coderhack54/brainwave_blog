import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import { useRouter } from 'next/router'
  import {FaTwitter,FaFacebookSquare,FaTelegram,FaWhatsapp} from "react-icons/fa"

const SharePost = () => {
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;
    console.log(URL);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl font-bold text-darkblue-500'>Share this post with your friends</h3>
        <p className='pt-4'>
        <FacebookShareButton url={URL} className='mr-4'>
            <FaFacebookSquare size={40} color='#4267B2'/>
        </FacebookShareButton>
        <TelegramShareButton url={URL} className='mr-4'>
            <FaTelegram size={40} color='#0088cc'/>
        </TelegramShareButton>
        <TwitterShareButton url={URL} className='mr-4'>
            <FaTwitter size={40}  color='#00acee'/>
        </TwitterShareButton>
        <WhatsappShareButton url={URL} className='mr-4'>
            <FaWhatsapp size={40} color='#25D366'/>
        </WhatsappShareButton>
        </p>
    </div>
  )
}

export default SharePost