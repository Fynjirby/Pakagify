import { AppActivity, FlexLayout, Tab, TabList, TabPanel, Tabs, UiApp } from "@nwrks/uikit";
import { Header } from "../../Common/UiComponents/Header";
import ProjectSettings from "./Tabs/ProjectSettings";
import { Releases } from "./Tabs/Releases";
import { Packages } from "./Tabs/Packages";

export default function ProjectView() {

  return (
    <AppActivity theme={"Light"} direction={"Vertical"}>
      <Header displayBackground={false} />

      <UiApp>
        <FlexLayout style={{ padding: '0.5em' }} flex={1} direction={"Vertical"}>
          <Tabs>
            <TabList>
              <Tab index={0}>Releases</Tab>
              <Tab index={1}>Packages</Tab>
              <Tab index={2}>Settings</Tab>
            </TabList>

            <TabPanel index={0}>
              <Releases />
            </TabPanel>

            <TabPanel index={1}>
              <Packages />
            </TabPanel>

            <TabPanel index={2}>
              <ProjectSettings />
            </TabPanel>
          </Tabs>
        </FlexLayout>
      </UiApp>
    </AppActivity>
  );
}
