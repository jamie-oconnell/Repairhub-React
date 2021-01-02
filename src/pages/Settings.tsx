import React from "react";
import PageHeader from "../components/layout/PageHeader";
import SettingsWidget from "../components/ui/SettingsWidget";
import { settings } from "../statics";

interface Props {}

const Settings = (props: Props) => {
  return (
    <>
      <PageHeader>
        <span className="textstyle-header flex-1">Settings</span>
      </PageHeader>
      <div className="w-full  px-8 py-8 flex justify-center fill-screen-height">
        <div className="container">
          <div
            className={`grid grid-cols-1 3xl:grid-cols-5 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 w-full auto-rows-min`}
          >
            {settings.map((setting) => {
              return (
                <SettingsWidget
                  title={setting.title}
                  description={setting.description}
                  icon={setting.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
