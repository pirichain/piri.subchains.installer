import {NavLink} from "@remix-run/react";
import {Button, Group, List, rem, Stack, Text, ThemeIcon, Title} from "@mantine/core";
import classes from "~/components/welcome/welcome.module.css";
import {IconDatabaseStar, IconEngine, IconRocket, IconShieldBolt} from "@tabler/icons-react";

export default function Index() {

    return (
        <Stack gap={0}>
            <Title className={classes.title}>
                A unique <span className={classes.highlight}>Blockchain</span> designed for your <span className={classes.title}
                                                                                                       style={{color: 'var(--mantine-color-red-4)'}}>business and data</span>
            </Title>
            <Group gap={"xs"}>
                <Title className={classes.title}>
                    by
                </Title>
                <Text className={classes.title} variant={"gradient"} gradient={{from: 'red', to: 'blue', deg: 45}}>
                    PIRICHAIN
                </Text>
            </Group>
            <Text c="dimmed" mt="md">
                You will rid yourself of external applications and high costs to integrate your business and
                data into the blockchain, enabling you to freely establish technology within your own sub-chain ecosystem.
            </Text>

            <List
                mt={30}
                spacing="sm"
                size="sm"
            >
                <List.Item icon={<ThemeIcon size={40} radius="sm" color={"gray"}>
                    <IconDatabaseStar style={{width: rem(28), height: rem(28)}} stroke={1.5}/>
                </ThemeIcon>}>
                    <b>Blockchain for Data</b> – With three different encryption variations, you will be able to securely
                    process your data on your blockchain.
                </List.Item>
                <List.Item icon={<ThemeIcon size={40} radius="sm" color={"green"}>
                    <IconShieldBolt style={{width: rem(28), height: rem(28)}} stroke={1.5}/>
                </ThemeIcon>}>
                    <b>D.V.P.A. </b> – (Domain Verified PIRI Address) With this feature bringing domain-based security to your
                    business, preventing fraud targeting or using your brand will be very easy.
                </List.Item>
                <List.Item icon={<ThemeIcon size={40} radius="sm">
                    <IconEngine style={{width: rem(32), height: rem(32)}} stroke={1.5}/>
                </ThemeIcon>}>
                    <b>Pirichain Smart Scenarios</b> – With Pirichain Smart Scenarios based on JavaScript, you will have a
                    technology that can easily integrate with your existing code, instantly retrieve and process external data,
                    and export it instantly. Get ready for a smart scenario experience beyond boundaries!
                </List.Item>
            </List>

            <Group mt={30} justify={"flex-end"}>
                <NavLink to={"/requirements"} unstable_viewTransition>
                    <Button
                        variant="default" radius="sm" size="md"
                        className={classes.control}
                        rightSection={<IconRocket/>}>
                        Start to Build Your Sub-Chain
                    </Button>
                </NavLink>
            </Group>
        </Stack>
    )
}
