import React from 'react';
import Hero from '../components/Home';
import JobCategories from '../components/Categories';
import VoiceAssistant from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    // TODO: Fetch featured jobs from backend
    // useEffect(() => {
    //   fetch('/api/jobs/featured').then(res => res.json()).then(data => setJobs(data));
    // }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <JobCategories />
            <VoiceAssistant />

            {/* Footer Placeholder */}
            <footer className="bg-gray-900 text-white py-8 text-center mt-12">
                <p>&copy; 2025 Karyam. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
