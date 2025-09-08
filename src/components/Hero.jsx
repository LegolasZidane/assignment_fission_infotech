export default function Hero(){
    return (
    <section className="h-[90vh] flex flex-col lg:flex-row items-center justify-center text-center px-8 lg:px-20 bg-white text-black">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            <span className="block">Design</span>
            <span className="block">Transform</span>
            <span className="block">Accelerate</span>
        </h1>

        <p className="font-extrabold mt-6 max-w-2xl text-black text-lg md:text-xl">
            Redefining user experiences through Behavioural Science & AI -
            Your trusted UI UX design agency.
        </p>

        <div className="mt-12 animate-bounce">
            <span className="text-3xl">⬇️</span>
        </div>
    </section>
    );
}