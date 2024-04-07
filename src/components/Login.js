import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HoverCard } from "@/components/ui/hover-card";
import Image from 'next/image';


export default function Login() {
    return (
     <main className="bg-black h-screen flex items-center justify-center p-12">
      <div className=" box-animate grid w-[60%] h-full grid-cols-1 bg-[#1b1b1b]  md:grid-cols-2 ">
        <div className="bg-[#f5f5f5] text-[#1b1b1b] flex items-center justify-center flex-col">
          <div className="my-2">
            <h1 className="font-bold text-2xl">WELCOME!</h1>
            <h2 className="font-semibold text-xl text-black mt-4 flex items-center justify-center ">Login</h2>
          </div>
  
          <form>
         
            <Label htmlFor="email">Email</Label>
            <Input 
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="mt-2 mb-2 bg-transparent rounded-xl border border-black"
            />
  
            <Label htmlFor="password">Password</Label>
            <Input 
            type="password"
            id="password"
            placeholder="Enter Your Password"
            className="mt-2 mb-2 bg-transparent rounded-xl border border-black"
            />
            <p className="text-xs flex justify-end items-end">Forget Password?</p>
  
            <Button type='submit' className="w-full mt-4 bg-[#1b1b1b] rounded-xl border border-black hover:bg-[#9c9c9c] hover:text-[#1b1b1b]" >
              Login
            </Button>
            <p className="text-xs mb-4 flex justify-center items-center ">Don't have an account?<HoverCard>Signup</HoverCard></p>
  
            <Button className="flex items-center w-full gap-4 px-12 bg-[#1b1b1b] text-[#f5f5f5] rounded-xl border border-black hover:bg-[#9c9c9c] hover:text-[#1b1b1b]" variant="outline">
              <FcGoogle />
               Sign In with google
            </Button>
          </form>
        </div>

        <div className="relative hidden md:block">
            <Image 
            className="object-cover"
            fill={true}
            src="/assets/loginimg.jpg"
            alt="background image"
            />

        </div>
  
      </div>
      
     </main>
    );
  }
