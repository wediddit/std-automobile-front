import {
    Box,
    Button,
    Collapse,
    IconButton,
    Menu,
    MenuItem,
    Stack,
} from "@mui/material";
import ButtonHeader from "@/components/buttons/ButtonHeader";
import Link from "next/link";
import { useContext, useState } from "react";
import {
    AddRounded,
    ArrowDropDown,
    CloseRounded,
    DirectionsCarFilledRounded,
    KeyboardArrowDown,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonPrimary from "@/components/buttons/ButtonHeader";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";

function Header() {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);
    const handleClickProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setAnchorElProfile(null);
    };

    const { auth, authMethods } = useContext(AuthContext);

    // log out
    const logout = () => {
        if (window.confirm("Voulez-vous vous déconnecter ?")) {
            authMethods.logout();
            router.push(`/`);
        }
    };

    // collapse xs menu
    const [openCollapse, setOpenCollapse] = useState(false);

    const handleButtonClickCollapse = () => {
        setOpenCollapse(!openCollapse);
    };

    //   phone menu
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
        setOpenCollapse(false);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            py={6}
            pl={3}
            position={"relative"}
        >
            <CloseRounded
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
                sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                }}
            />

            <Stack direction={"column"} spacing={1} alignItems={"flex-start"}>
                <Link href={"/"} style={{ textDecoration: "none" }}>
                    <ButtonHeader
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{
                            color: `${router.pathname == "/" ? "white" : "black"}`,
                            backgroundColor: `${router.pathname == "/" ? "black" : "white"}`,
                            "&:hover": {
                                backgroundColor:
                                    router.pathname == "/" ? "black" : "grey.light",
                            },
                        }}
                    >
                        Accueil
                    </ButtonHeader>
                </Link>
                {/* 
                <Stack display={{ sm: "none", xs: "flex" }}>
                    <ButtonHeader
                        endIcon={<ArrowDropDown />}
                        onClick={() => {
                            handleButtonClickCollapse();
                        }}
                        sx={{
                            color: `black`,
                            backgroundColor: `white`,
                            "&:hover": {
                                backgroundColor: "grey.light",
                            },
                            width: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        Nos annonces
                    </ButtonHeader>

                    <Box sx={{ display: `${openCollapse ? "flex" : "none"}` }}>
                        <Collapse
                            in={openCollapse}
                            sx={{
                                py: 1,
                                backgroundColor: "grey.light",
                                borderRadius: "10px",
                                width: 1,
                                pl: 1,
                            }}
                        >
                            <Link
                                href={
                                    "https://www.leboncoin.fr/boutique/100572/std_automobile.htm"
                                }
                                target="_blank"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    sx={{
                                        color: `black`,
                                        fontSize: "15px",
                                        width: 1,
                                        display: "flex",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    Le bon coin
                                </Button>
                            </Link>

                            <Divider />

                            <Link
                                href={"https://occasion.largus.fr/auto/std-automobile_154791"}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    sx={{
                                        color: `black`,
                                        fontSize: "15px",
                                        width: 1,
                                        display: "flex",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    L'argus
                                </Button>
                            </Link>
                        </Collapse>
                    </Box>
                </Stack> */}

                <Link href={"https://pros.lacentrale.fr/C049855/cat-auto"} target="_blank" style={{ textDecoration: "none" }}>
                    <ButtonHeader
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{
                            color: `${router.pathname == "/delivery" ? "white" : "black"}`,
                            backgroundColor: `${router.pathname == "/delivery" ? "black" : "white"
                                }`,
                            "&:hover": {
                                backgroundColor:
                                    router.pathname == "/delivery" ? "black" : "grey.light",
                            },
                        }}
                    >
                        Nos annonces
                    </ButtonHeader>
                </Link>

                <Link href={"/delivery"} style={{ textDecoration: "none" }}>
                    <ButtonHeader
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{
                            color: `${router.pathname == "/delivery" ? "white" : "black"}`,
                            backgroundColor: `${router.pathname == "/delivery" ? "black" : "white"
                                }`,
                            "&:hover": {
                                backgroundColor:
                                    router.pathname == "/delivery" ? "black" : "grey.light",
                            },
                        }}
                    >
                        Livraison
                    </ButtonHeader>
                </Link>

                <Link href={"/recovery"} style={{ textDecoration: "none" }}>
                    <ButtonHeader
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{
                            color: `${router.pathname == "/recovery" ? "white" : "black"}`,
                            backgroundColor: `${router.pathname == "/recovery" ? "black" : "white"
                                }`,
                            "&:hover": {
                                backgroundColor:
                                    router.pathname == "/recovery" ? "black" : "grey.light",
                            },
                        }}
                    >
                        Reprise
                    </ButtonHeader>
                </Link>

                <Link href={"/contact"} style={{ textDecoration: "none" }}>
                    <ButtonHeader
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{
                            color: `${router.pathname == "/contact" ? "white" : "black"}`,
                            backgroundColor: `${router.pathname == "/contact" ? "black" : "white"
                                }`,
                            "&:hover": {
                                backgroundColor:
                                    router.pathname == "/contact" ? "black" : "grey.light",
                            },
                        }}
                    >
                        Contact
                    </ButtonHeader>
                </Link>

                {authMethods.isConnected(auth) && <Divider sx={{ width: 1 }} />}

                {authMethods.isConnected(auth) && (
                    <Link
                        href="/dashboard/add-ad"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "black",
                        }}
                    >
                        <ButtonHeader
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                            startIcon={<AddRounded />}
                            sx={{
                                color: `${router.pathname == "/dashboard/add-ad" ? "white" : "black"
                                    }`,
                                backgroundColor: `${router.pathname == "/dashboard/add-ad" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/dashboard/add-ad"
                                            ? "black"
                                            : "grey.light",
                                },
                            }}
                        >
                            Ajouter une annonce
                        </ButtonHeader>
                    </Link>
                )}

                {authMethods.isConnected(auth) && (
                    <Link
                        href="/dashboard/all-ads"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "black",
                        }}
                    >
                        <ButtonHeader
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                            startIcon={<DirectionsCarFilledRounded />}
                            sx={{
                                color: `${router.pathname == "/dashboard/all-ads" ? "white" : "black"
                                    }`,
                                backgroundColor: `${router.pathname == "/dashboard/all-ads" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/dashboard/all-ads"
                                            ? "black"
                                            : "grey.light",
                                },
                            }}
                        >
                            Modifier une annonce
                        </ButtonHeader>
                    </Link>
                )}

                {authMethods.isConnected(auth) && (
                    <ButtonHeader
                        startIcon={<Logout />}
                        onClick={logout}
                        sx={{
                            color: "error.main",
                        }}
                    >
                        Déconnexion
                    </ButtonHeader>
                )}
            </Stack>
        </Box>
    );

    return (
        <Stack width={1}>
            {/* laptop */}
            <Stack
                sx={{
                    boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                height={80}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                display={{ lg: "flex", sm: "flex", xs: "none" }}
                backgroundColor={"white"}
                px={2}
            >
                {/* logo */}
                <Link href="/">
                    <Stack width={"130px"}>
                        <Image src="/logo-std.png" alt="" width={130} height={50} />
                    </Stack>
                </Link>

                {/* menu */}
                <Stack direction={"row"} spacing={1}>
                    <Link href={"/"} style={{ textDecoration: "none" }}>
                        <ButtonHeader
                            sx={{
                                color: `${router.pathname == "/" ? "white" : "black"}`,
                                backgroundColor: `${router.pathname == "/" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/" ? "black" : "grey.light",
                                },
                            }}
                        >
                            Accueil
                        </ButtonHeader>
                    </Link>

                    {/* <ButtonHeader
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDown />}
                        sx={{
                            color: `black`,
                            "&:hover": {
                                backgroundColor: "grey.light",
                            },
                        }}
                    >
                        Nos annonces
                    </ButtonHeader>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <Link
                            href={
                                "https://www.leboncoin.fr/boutique/100572/std_automobile.htm"
                            }
                            target="_blank"
                            style={{ textDecoration: "none" }}
                        >
                            <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                                Le bon coin
                            </MenuItem>
                        </Link>
                        <Link
                            href={"https://occasion.largus.fr/auto/std-automobile_154791"}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                        >
                            <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                                L'argus
                            </MenuItem>
                        </Link>
                    </Menu> */}

                    <Link href={"https://pros.lacentrale.fr/C049855/cat-auto"} target="_blank" style={{ textDecoration: "none" }}>
                        <ButtonHeader
                            sx={{
                                color: `black`,
                                backgroundColor: `white`,
                                "&:hover": "grey.light",
                            }}
                        >
                            Nos annonces
                        </ButtonHeader>
                    </Link>

                    <Link href={"/delivery"} style={{ textDecoration: "none" }}>
                        <ButtonHeader
                            sx={{
                                color: `${router.pathname == "/delivery" ? "white" : "black"}`,
                                backgroundColor: `${router.pathname == "/delivery" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/delivery" ? "black" : "grey.light",
                                },
                            }}
                        >
                            Livraison
                        </ButtonHeader>
                    </Link>

                    <Link href={"/recovery"} style={{ textDecoration: "none" }}>
                        <ButtonHeader
                            sx={{
                                color: `${router.pathname == "/recovery" ? "white" : "black"}`,
                                backgroundColor: `${router.pathname == "/recovery" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/recovery" ? "black" : "grey.light",
                                },
                            }}
                        >
                            Reprise
                        </ButtonHeader>
                    </Link>

                    <Link href={"/contact"} style={{ textDecoration: "none" }}>
                        <ButtonHeader
                            sx={{
                                color: `${router.pathname == "/contact" ? "white" : "black"}`,
                                backgroundColor: `${router.pathname == "/contact" ? "black" : "white"
                                    }`,
                                "&:hover": {
                                    backgroundColor:
                                        router.pathname == "/contact" ? "black" : "grey.light",
                                },
                            }}
                        >
                            Contact
                        </ButtonHeader>
                    </Link>

                    {authMethods.isConnected(auth) && (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClickProfile}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={openProfile ? "account-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openProfile ? "true" : undefined}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                fontSize: "12px",
                                                backgroundColor: "primary.dark",
                                            }}
                                        >
                                            Std
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorElProfile}
                                id="account-menu"
                                open={openProfile}
                                onClose={handleCloseProfile}
                                onClick={handleCloseProfile}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: "visible",
                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                        mt: 1.5,
                                        "& .MuiAvatar-root": {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        "&:before": {
                                            content: '""',
                                            display: "block",
                                            position: "absolute",
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "background.paper",
                                            transform: "translateY(-50%) rotate(45deg)",
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: "right", vertical: "top" }}
                                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                            >
                                <MenuItem onClick={handleCloseProfile}>
                                    <Link
                                        href="/dashboard/add-ad"
                                        style={{
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            color: "black",
                                        }}
                                    >
                                        <AddRounded sx={{ mr: 1 }} /> Ajouter une annonce
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfile}>
                                    <Link
                                        href="/dashboard/all-ads"
                                        style={{
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            color: "black",
                                        }}
                                    >
                                        <DirectionsCarFilledRounded sx={{ mr: 1 }} /> Modifier une
                                        annonce
                                    </Link>
                                </MenuItem>
                                <Divider />
                                <MenuItem
                                    sx={{ color: "error.main" }}
                                    onClick={() => {
                                        handleCloseProfile();
                                        logout();
                                    }}
                                >
                                    <ListItemIcon>
                                        <Logout sx={{ color: "error.main" }} fontSize="small" />
                                    </ListItemIcon>
                                    Déconnexion
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </Stack>
            </Stack>

            {/* mobile */}
            <Stack
                sx={{
                    boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                height={60}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                px={1}
                display={{ lg: "none", sm: "none", xs: "flex" }}
            >
                {/* logo */}
                <Link href="/">
                    <Image src="/logo-std.png" alt="" width={100} height={40} />
                </Link>

                <Stack>
                    {["right"].map((anchor) => (
                        <Stack key={anchor}>
                            <IconButton onClick={toggleDrawer(anchor, true)}>
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                transitionDuration={300}
                            >
                                {list(anchor)}
                            </Drawer>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Header;
