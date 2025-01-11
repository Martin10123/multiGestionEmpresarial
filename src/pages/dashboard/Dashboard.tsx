import { useState } from "react";
import { HomeTemplate } from "@/templates/HomeTemplate";
import { lineGraficData } from "@/data/echarts/lineGraficData";

import { EChartComponent } from "@/components/pages/dashboard/EchartComponent";
import { TableDashboard } from "@/components/pages/dashboard/TableDashboard";
import { ListItemsHeader } from "@/components/pages/dashboard/ListItemsHeader";
import { HeaderInfoUser } from "@/components/pages/dashboard/HeaderInfoUser";
import { Reminder } from "@/components/pages/dashboard/Reminder";
import { Notifications } from "@/components/pages/dashboard/Notifications";

export const Dashboard = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <HomeTemplate>
      <section className="p-4 md1:p-10 md1:pl-16 lg1:flex lg1:gap-4 w-full">
        <div className="md1:max-w-[52rem] 2xl:w-[52rem] lg1:border-r lg1:border-gray-200 lg1:pr-6">
          <HeaderInfoUser />

          <ListItemsHeader />

          <div className="w-full h-[30rem] mt-4 bg-white rounded-lg shadow-md">
            <EChartComponent options={lineGraficData} />
          </div>

          <TableDashboard />
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

            {tabs === 1 && <Reminder />}

            {tabs === 2 && <Notifications />}
          </div>
        </div>
      </section>
    </HomeTemplate>
  );
};
