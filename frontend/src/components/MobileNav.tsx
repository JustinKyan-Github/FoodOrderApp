import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-cyan-500"/>
            </SheetTrigger>
            
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to PlaceHolder</span>
                </SheetTitle>

                <Separator/>

                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-cyan-500">Log in</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
