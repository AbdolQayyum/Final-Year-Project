
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Image from 'next/image'


export default function Signup() {
    
    
    return (
     <main className="bg-black h-screen flex items-center justify-center p-12">
      <div className="box-animate grid w-[60%] h-full grid-cols-1 bg-[#1b1b1b]  md:grid-cols-2 ">
        <div className="bg-[#f5f5f5] text-[#1b1b1b] flex items-center justify-center flex-col">
          <div>
            <h1 className="font-bold text-2xl">Join For Success</h1>
            <h2 className="font-semibold text-xl text-black mt-2 flex items-center justify-center ">SignUp</h2>
          </div>
  
          <form>

           <Label htmlFor="name">Name</Label>
            <Input 
            type="name"
            id="name"
            Placeholder="Enter name"
            className="mt-1 mb-1 bg-transparent rounded-xl border border-black"
            />
         
            <Label htmlFor="email">Email</Label>
            <Input 
            type="email"
            id="email"
            Placeholder="Enter Your Email"
            className="mt-1 mb-1 bg-transparent rounded-xl border border-black"
            />
  
            <Label htmlFor="password">Password</Label>
            <Input 
            type="password"
            id="password"
            Placeholder="Enter Your Password"
            className="mt-1 mb-1 bg-transparent rounded-xl border border-black"
            />

            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input 
            type="password"
            id="password"
            Placeholder="Re-enter your Password"
            className="mt-1 mb-1 bg-transparent rounded-xl border border-black"
            />
           
  
            <Button type='submit' className="w-full mt-2 bg-[#1b1b1b] rounded-xl border border-black hover:bg-[#9c9c9c] hover:text-[#1b1b1b]" >
              Sign Up
            </Button>
            <p className="text-xs flex items-center mb-2 justify-center">Already have an account? Login</p>
            <Button className="flex items-center mt-1 w-full gap-4 px-12 bg-[#1b1b1b] text-[#f5f5f5] rounded-xl border border-black hover:bg-[#9c9c9c] hover:text-[#1b1b1b]" variant="outline">
              <FcGoogle />
               Sign Up with google
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
