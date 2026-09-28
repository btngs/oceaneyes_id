import React from "react";
import SectionLayout from "../../../../components/layout/section-layout";

function OEViewValue() {
  return (
    <SectionLayout>
      <div className="flex w-full items-center flex-col gap-y-10 my-10">
        <div className="flex w-[960px] flex-col lg:flex-row lg:justify-between lg:items-end gap-y-4">
          <div className="flex flex-col gap-y-4 lg:max-w-[500px]">
            <h5 className="text-cyan-900 text-base lg:text-left text-center">
              Advantages
            </h5>
            <h1 className="font-bold text-2xl lg:text-3xl lg:text-left text-center ">
              Kelebihan OEView, Lebih dari Sekadar Aplikasi Laut
            </h1>
          </div>
          <div className="flex flex-col lg:items-end">
            <h5 className="text-gray-500 text-center text-lg lg:text-left">
              Dirancang khusus untuk kebutuhan laut dengan fitur yang tidak
              dimiliki aplikasi lain.
            </h5>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="grid grid-rows-5 grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 gap-2 w-[950px]">
            <div className="flex w-full flex-col h-full border-[1px] bg-teal-50 border-teal-50 p-4 gap-y-4 rounded-tr-[50px]">
              <h3 className="text-lg font-semibold text-teal-900">Mode Offline</h3>
              <h4 className="text-gray-500">
                Tetap bisa digunakan tanpa internet — sangat penting di laut
                lepas atau area terpencil.
              </h4>
            </div>
            <div className="flex w-full flex-col h-full border-[1px] bg-cyan-900 border-cyan-900 p-4 gap-y-4 rounded-bl-[50px]">
              <h3 className="text-lg font-semibold text-white">Ringan & Mudah</h3>
              <h4 className="text-white">
                Ukuran kecil, antarmuka sederhana, mudah dipahami bahkan untuk
                pengguna baru.
              </h4>
            </div>
            <div className="flex w-full flex-col h-full border-[1px] border-teal-50 p-4 gap-y-4 bg-teal-50 rounded-tr-[50px]">
              <h3 className="text-lg font-semibold text-teal-900">Forecasting 5 Hari</h3>
              <h4 className="text-gray-500">
                Peramalan kondisi laut hingga 5 hari ke depan, membantu
                perencanaan dan keselamatan perjalanan.
              </h4>
            </div>
            <div className="flex w-full flex-col h-full border-[1px] bg-cyan-900 border-cyan-900 p-4 gap-y-4 rounded-bl-[50px]">
              <h3 className="text-lg font-semibold text-white">Data Satelit Terkemuka</h3>
              <h4 className="text-white">
                Menggunakan sumber terpercaya seperti Himawari & Copernicus
                untuk akurasi maksimal.
              </h4>
            </div>
            <div className="flex w-full flex-col h-full border-[1px] border-teal-50 p-4 gap-y-4 rounded-tr-[50px] bg-teal-50">
              <h3 className="text-lg font-semibold text-teal-900">Offline GPS Tracking</h3>
              <h4 className="text-gray-500">
                Melacak posisi dan menampilkan kondisi laut sekitar hanya dengan
                GPS internal, tanpa internet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OEViewValue;
