import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Github, Computer, Send } from "lucide-react"
import { cn } from '../lib/Utiis'
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import emailjs from '@emailjs/browser';


export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon...."
            });
            e.target.reset();
            setIsSubmitting(false);
        }, (error) => {
            console.log(error.text);
            toast({
                title: "Something went wrong.",
                description: "Please try again later or contact me directly at shaniprajapati630@gmail.com"
            });
            e.target.reset();
            setIsSubmitting(false);
        });
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     isSubmitting(true);

    //     setTimeout(() => {
    //         toast({
    //             title: "Message sent!",
    //             description:  "Thank you for your message. I'll get back to you soon...."
    //         })
    //         isSubmitting(false);
    //     }, 1500);

    // }

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Let's <span className="text-primary"> Connect</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate ? feel free to reach out
                    I'm always open to discussing new opportunities
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:shaniprajapati630@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        shaniprajapati630@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                        href="tel:+91-6307527950"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 6307527950
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Loction</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Greater-Nodia, UP, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/shaniprajapatiii/" target="_blank"> <Linkedin /> </a>
                                <a href="https://github.com/shaniprajapatiii" target="_blank"> <Github /> </a>
                                <a href="#" target="_blank"> <Twitter /> </a>
                               <a href="https://www.instagram.com/shaniprajapatiii/" target="_blank"> <Instagram /> </a>
                                {/* <a href="https://leetcode.com/u/shaniprajapatiii/" target="_blank"> <Computer /> </a> */}
                                <a href="#" target="_blank"> <Computer /> </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Massage</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Your Name...."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your E-Mail</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="yourname@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter Your Message...."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-3",

                                )}
                            >
                                {isSubmitting ? "Sending...." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}