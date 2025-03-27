import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Terminal, Cpu, BrainCircuit, Network } from "lucide-react";

const About = () => {

    const socialLinks = {
        github: "https://github.com/yRajV95",
        linkedin: "https://www.linkedin.com/in/rajvardhan-ganji-b7335726a/",
        email: "mailto:rajvardhan202004@gmail.com"
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-12">
            {/* Hero Section with fixed name display */}
            <section className="text-center space-y-6 mb-8 w-full max-w-2xl">
                <div className="relative inline-block">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                        <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGFYBZnLYqr5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726947223127?e=1748476800&v=beta&t=gJI0T7MZ58smj2OgAho1Xo00n7B5-StWxVh4nozbanA" alt="Rajvardhan Ganji" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-medium">RG</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md">
                        <Cpu className="h-6 w-6 text-blue-600" />
                    </div>
                </div>
                <div className="px-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent break-words leading-[1.2] pb-3">
                        Rajvardhan Ganji
                    </h1>

                </div>
                <p className="text-xl text-gray-600 font-medium">
                    B.Tech CSE (AI) | Developer | AI Enthusiast
                </p>
            </section>

            {/* Bio Section */}
            <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-8">
                <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <BrainCircuit className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Network className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Passionate about <span className="font-semibold text-blue-600">Large Language Models</span>, <span className="font-semibold text-purple-600">Reinforcement Learning</span>, <span className="font-semibold text-red-500">Computer Vision</span> and <span className="font-semibold text-green-500">System Design</span>.
                            I love building projects that involve <span className="font-semibold">Deep Learning</span>, <span className="font-semibold">Natural Language Processing</span>, and <span className="font-semibold">BlockChain</span>.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Tech Stack */}
            <div className="mb-8 w-full max-w-2xl">
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Tech Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-blue-100 rounded-full mb-3">
                            <Code className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">Frontend</h3>
                        <p className="text-sm text-gray-500 mt-1">React & Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-green-100 rounded-full mb-3">
                            <Terminal className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">Backend</h3>
                        <p className="text-sm text-gray-500 mt-1">REST APIs, Authentication, Database Design</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-purple-100 rounded-full mb-3">
                            <BrainCircuit className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">AI/ML</h3>
                        <p className="text-sm text-gray-500 mt-1">PyTorch & TensorFlow</p>
                    </div>
                </div>
            </div>

            {/* Contact & Social Links - Updated with links */}
            <div className="flex flex-col items-center">
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Button className="flex gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg shadow hover:shadow-md transition-all">
                            <Github className="h-5 w-5" /> GitHub
                        </Button>
                    </a>

                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button className="flex gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg shadow hover:shadow-md transition-all">
                            <Linkedin className="h-5 w-5" /> LinkedIn
                        </Button>
                    </a>

                    <a href={socialLinks.email}>
                        <Button className="flex gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white rounded-lg shadow hover:shadow-md transition-all">
                            <Mail className="h-5 w-5" /> Contact
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;