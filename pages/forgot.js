import Link from 'next/link';
import { logo, title } from '../site.config';
import { ForgotForm } from '../components/Forms';

const Page = () => (
  <main className="grid sm:grid-cols-2 min-h-screen">
    <div className="hidden sm:flex relative cover bg-cover flex-col ">
      <div className="z-0 flex flex-col">
        <div className="flex gap-4 items-center p-10">
          <img className="w-16" src={logo} alt={title} />
          <h1 className="font-display text-lg md:text-2xl font-semibold text-white">{title}</h1>
        </div>
        <div className="flex absolute bottom-0 flex-col gap-3 p-10">
          <p className="text-gray-200">
            &rdquo;In chess, we have styles - like in any other field. There are also fashions in
            the kinds of systems that people play. So I'm trying to know my opponent as much as
            possible.&rdquo;
          </p>
          <p className="text-white font-semibold">Garry Kasparov</p>
        </div>
      </div>
    </div>
    <div className="relative bg-white flex flex-col gap-10 items-center justify-center w-full">
      <div className="flex w-full sm:justify-end justify-between absolute p-4 sm:p-0 top-0">
        <div className="flex sm:hidden gap-2 items-center">
          <img className="w-10" src={logo} alt={title} />
          <h1 className="font-display w-32 font-semibold">{title}</h1>
        </div>
        <Link href="/login">
          <span className="font-semibold text-sm text-black sm:m-10 rounded-md px-3 py-2 cursor-pointer no-underline hover:bg-gray-200">
            Login
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="font-bold text-3xl">Recover your password</h2>
        <p className="text-sm text-gray-600">
          Enter email, follow instructions to recover your password.
        </p>
      </div>
      <div className="max-w-md p-4 w-full">
        <ForgotForm />
      </div>
      <p className="absolute bottom-0 p-6 sm:p-10 text-xs text-gray-800">
        Copyright © 2023 - International Chess Club
      </p>
    </div>
  </main>
);

export default Page;
