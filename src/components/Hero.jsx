export default function Hero(){
    return (
    <section className="h-[90vh] flex flex-col lg:flex-row items-center justify-center text-center px-8 lg:px-20 bg-white dark:bg-black text-black dark:text-white">
        
        <div className="flex-1 flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="block">Design</span>
                <span className="block">Transform</span>
                <span className="block">Accelerate</span>
            </h1>

            <p className="max-w-lg text-lg md:text-2xl font-medium text-black md:text-xl">
                Redefining user experiences through Behavioural Science & AI
            </p>
        </div>
    </section>
    );
}