import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./LoginPage";

export const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const loginHandle: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-7 rounded-xl shadow-lg w-full max-w-md">
                    <h1 className="text-lg font-bold mb-4 text-center">Đăng nhập</h1>
                    <form onSubmit={handleSubmit(loginHandle)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block">
                                <span className="block text-sm font-medium text-slate-700">Email:</span>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Nhập email"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Bạn chưa nhập email</span>}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block">
                                <span className="block text-sm font-medium text-slate-700">Mật khẩu:</span>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Nhập mật khẩu"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">Bạn chưa nhập mật khẩu</span>}
                            </label>
                        </div>
                        <div className="mb-6">
                            <button type="submit"
                                className=" w-full rounded-full text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none
                                    focus:ring focus:ring-violet-300 p-2">Đăng nhập</button>
                        </div>
                        <p className="text-center text-gray-500 hover:text-gray-700"><a href="#">Quên mật khẩu ?</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};
