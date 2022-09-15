import React, { useState, useEffect } from 'react'
import Images from '../images';

export default function Forget() {
    const [sWidth] = useState(window.innerWidth);
    const [sHeight] = useState(window.innerHeight);
    const [showData, setShowData] = useState(true);
    React.useEffect(() => {

    })
    return (
        <div>
            <div className='container' style={{
                width: sWidth,
                minWidth: 1920,
                minHeigh: sHeight,
                backgroundColor: 'rgba(235,240,200,0.8)'
            }}>
                <div className='header' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div className='headerlogo' style={{
                        width: 50,
                        height: 50,
                        backgroundImage: 'url(' + Images.divisionLevel1 + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        marginLeft: 50,
                    }}></div>
                    <div className='navigt' style={{
                        width: 500,
                        height: 50,
                        backgroundColor: 'rgb(255,2,2)',
                    }}></div>
                    <div className='user' style={{
                        display: 'flex',
                    }}>
                        <div className='avatar' style={{
                            width: 50,
                            height: 50,
                            marginRight: 10,
                            backgroundColor: 'rgba(23,24,200,0.8)'
                        }}></div>
                        <div className='detail' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 55
                        }}>
                            <div className='sub'>用户名</div>
                            <div className='sup'>信息</div>
                        </div>
                    </div>
                </div>
                <div className='body' style={{
                    width: '100%',
                    height: 1000,
                    padding: 20,
                    backgroundColor: 'pink',
                }}>
                    <div className='compare' style={{
                        position: 'relative',
                        width: '45%',
                        height: 900,
                        backgroundColor: 'rgb(255,255,255)',
                    }}>
                        <div className='title'><h1>比较</h1></div>
                        <button className='cbtn' onClick={() => {
                            if (showData === 'false') {
                                setShowData(true)
                            }
                            else {
                                setShowData(false)
                            }
                        }} style={{
                            position: 'absolute',
                            top: 5,
                            right: 10,
                            backgroundColor: 'orange',
                            border: 'none',
                            width: 80,
                            height: 40,
                        }}>对比</button>
                        <div className='triangle' style={{
                            position: 'absolute',
                            top: 45,
                            right: 40,
                            width: 0,
                            height: 0,
                            borderBottom: '10px solid red',
                            borderLeft: '10px solid transparent',
                            borderRight: '10px solid transparent',
                            zIndex: 1000,
                        }}></div>
                        <div className='datadetail' style={{
                            position: 'absolute',
                            top: 53,
                            right: 3,
                            width: '40%',
                            height: 240,
                            backgroundColor: 'red',
                            display: showData ? 'flex' : 'none',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div className='data1' style={{
                                width: '80%',
                                height: "30%",
                                backgroundColor: '#ccc',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div className='datatitle' style={{
                                    width: '20%',
                                    height: 50,
                                    backgroundColor: 'red',
                                }}></div>
                                <div className='progress' style={{
                                    width: '70%',
                                    height: 40,
                                    padding: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        marginLeft: 80,
                                    }}><span>50%</span></div>
                                    <div className='progressbar' style={{
                                        width: '100%',
                                        height: 18,
                                        borderRadius: 15,
                                        backgroundColor: 'rgba(255,255,255,1)',
                                    }}>
                                        <div className='alreadybar' style={{
                                            width: '50%',
                                            height: '100%',
                                            borderRadius: 15,
                                            backgroundColor: 'blue',
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='data2' style={{
                                width: '80%',
                                height: "30%",
                                backgroundColor: 'lightgreen',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div className='datatitle' style={{
                                    width: '20%',
                                    height: 50,
                                    backgroundColor: 'red',
                                }}></div>
                                <div className='progress' style={{
                                    width: '70%',
                                    height: 40,
                                    padding: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        marginLeft: 80,
                                    }}><span>99%</span></div>
                                    <div className='progressbar' style={{
                                        width: '100%',
                                        height: 18,
                                        borderRadius: 15,
                                        backgroundColor: 'rgba(255,255,255,1)',
                                    }}>
                                        <div className='alreadybar' style={{
                                            width: '99%',
                                            height: '100%',
                                            borderRadius: 15,
                                            backgroundColor: 'pink',
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='data3' style={{
                                width: '80%',
                                height: "30%",
                                backgroundColor: '#ccc',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div className='datatitle' style={{
                                    width: '20%',
                                    height: 50,
                                    backgroundColor: 'red',
                                }}></div>
                                <div className='progress' style={{
                                    width: '70%',
                                    height: 40,
                                    padding: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        marginLeft: 80,
                                    }}><span>80%</span></div>
                                    <div className='progressbar' style={{
                                        width: '100%',
                                        height: 18,
                                        borderRadius: 15,
                                        backgroundColor: 'rgba(255,255,255,1)',
                                    }}>
                                        <div className='alreadybar' style={{
                                            width: '80%',
                                            height: '100%',
                                            borderRadius: 15,
                                            backgroundColor: 'orange',
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='comparedetail' style={{
                            width: '100%',
                            height: 500,
                            backgroundColor: 'lightblue',
                        }}></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
