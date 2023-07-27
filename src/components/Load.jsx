import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="bg-slate-900 h-screen w-screen flex flex-col  items-center justify-center">
            <h2 className="text-white font-mono text-xl pb-4">Loading my react projects </h2>
            <ReactLoading type="spokes" color="#0000FF"
                height={200} width={200} />

        </div>
    );
}