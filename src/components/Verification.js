import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Verification(){
    return(
        <main className="bg-black h-screen flex items-center justify-center">
            <div className="box-animate bg-[#f5f5f5] text-[#1b1b1b] flex items-center justify-center flex-col">
            <div className="my-12 mx-12">
            <h1 className="font-bold text-2xl flex items-center justify-center">Reset Password</h1>
            <p className="text-xs mb-4 flex justify-center items-center mt-2 ">Please enter your email or number to reset password</p>
            <div>
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
            <Input 
            type="reset password"
            id="reset password"
            placeholder="Email or Phone"
            className="mt-2 mb-2 bg-transparent rounded-xl border border-black"
            />
            </div>
            <Button type='submit' className="w-full mt-4 bg-[#1b1b1b] rounded-xl border border-black hover:bg-[#9c9c9c] hover:text-[#1b1b1b]" >
              Reset Password
            </Button>
           
            </div>

            </div>

        
        

        </main>
    )
}
