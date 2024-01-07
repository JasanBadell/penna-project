import React, { useState } from "react";
import { Box, Tab, TabPanel, TabsHeader } from "@material-tailwind/react";
import { TabsContext } from "@material-tailwind/react/components/Tabs/TabsContext";

const Tabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabsContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabsHeader aria-label="Productions" onChange={handleChange}>
            <Tab aria-label="Tradicionales" value={1} />
            <Tab aria-label="Nuevos Desarrollos" value={2} />
            <Tab aria-label="Otros" value={3} />
          </TabsHeader>
        </Box>
        <TabPanel value={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          mollitia animi libero omnis ullam ab, quae hic rerum, qui debitis
          officiis voluptate exercitationem at sapiente velit modi explicabo
          temporibus excepturi?
        </TabPanel>
        <TabPanel value={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptates laborum nobis explicabo odit, mollitia non blanditiis
          doloribus officia minima tempora sint quasi! Adipisci aliquam
          molestiae, reprehenderit suscipit tenetur officiis.
        </TabPanel>
        <TabPanel value={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          molestias modi, id officiis, exercitationem fugit tempora rerum
          veritatis assumenda consectetur consequuntur fuga doloremque odio quia
          ea. Rerum amet nostrum eos!
        </TabPanel>
      </TabsContext>
    </Box>
  );
};

export default Tabs;
