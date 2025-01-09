import { InicioTemplate } from "@/templates/InicioTemplate";
import { graficaLinealData } from "@/data/echarts/GraficoLinealData";

import { EChartComponent } from "@/components/pages/dashboard/EchartComponent";
import { TablaDashboard } from "@/components/pages/dashboard/TablaDashboard";
import { ListaItemsHeader } from "@/components/pages/dashboard/ListaItemsHeader";
import { HeaderInfoUsario } from "@/components/pages/dashboard/HeaderInfoUsario";
import { Recordatorios } from "@/components/pages/dashboard/Recordatorios";
import { Notificaciones } from "@/components/pages/dashboard/Notificaciones";
import { useState } from "react";

export const Dashboard = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <InicioTemplate>
      <section className="p-4 md1:p-10 md1:pl-16 lg1:flex lg1:gap-4 w-full">
        <div className="md1:max-w-[52rem] 2xl:w-[52rem] lg1:border-r lg1:border-gray-200 lg1:pr-6">
          <HeaderInfoUsario />

          <ListaItemsHeader />

          <div className="w-full h-[30rem] mt-4 bg-white rounded-lg shadow-md">
            <EChartComponent options={graficaLinealData} />
          </div>

          <TablaDashboard />
        </div>

        <div className="hidden lg:block">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTabs(1)}
                  className={`${
                    tabs === 1 ? "text-black font-semibold" : "text-gray-700"
                  } hover:text-quinary`}
                >
                  Recordatorios
                </button>
                <button
                  onClick={() => setTabs(2)}
                  className={`${
                    tabs === 2 ? "text-black font-semibold" : "text-gray-700"
                  } hover:text-quinary`}
                >
                  Notificaciones
                </button>
              </div>
            </div>

            {tabs === 1 && <Recordatorios />}

            {tabs === 2 && <Notificaciones />}
          </div>
        </div>
      </section>
    </InicioTemplate>
  );
};
