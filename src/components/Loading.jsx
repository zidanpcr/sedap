export default function Loading() {
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-100 h-100 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-red-600 text-lg">Loading...</p>
        </div>
    );
}
