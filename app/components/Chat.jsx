import React from 'react';
import Link from 'next/link';
import { MdOutlineChat } from "react-icons/md";

const Chat = () => {
    return (
        <Link href="/">
            <div className='fixed bottom-8 right-8 px-5 py-3 text-green-600 flex items-center text-xl font-bold shadow-2xl rounded-2xl bg-slate-50 border-b'>
                <MdOutlineChat className='mr-2' />
                Chat
            </div>
        </Link>
    );
}

export default Chat;
