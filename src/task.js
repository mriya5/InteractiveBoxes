import React, { useState } from 'react';
import './task.css';

export default function Task() {
    const [selectedUnit, setSelectedUnit] = useState(0);
    const handleUnitChange = (unit) => {
        setSelectedUnit(unit);
    };

    return (
        <div className='task'>
            <div style={{ fontSize: '25px', padding: '20px' }}>YAY! It's BOGO</div>
            <div className='main'>
                <div className='container' onClick={() => handleUnitChange(1)}>
                    <div className='main_content'>
                        <div className='amount'>
                            <div className='content'>
                                <input type='radio' name="unit" checked={selectedUnit === 1} readOnly />
                                <h5>1 Unit</h5>
                                <p>10% off</p>
                            </div>
                            <p style={{ margin: '0', padding: "0", marginLeft: "10px", fontSize: "12px" }}>Standard Price</p>
                        </div>
                        <div className='price'>
                            <h5>$10.00 USD</h5>
                            <p>$24.00 USD</p>
                        </div>
                    </div>
                    {selectedUnit === 1 && (
                        <div className='details'>
                            <div className='size'>
                                <p>Size</p>
                                <p>Colour</p>
                            </div>
                            <div className='details_content'>
                                <p>#1</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                            <div className='details_content'>
                                <p>#2</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="badge">MOST POPULAR</div>
                <div className='container' onClick={() => handleUnitChange(2)}>
                    <div className='main_content'>
                        <div className='amount'>
                            <div className='content'>
                                <input type='radio' name="unit" checked={selectedUnit === 2} readOnly />
                                <h5>2 Unit</h5>
                                <p>20% off</p>
                            </div>
                        </div>
                        <div className='price'>
                            <h5>$18.00 USD</h5>
                            <p>$24.00 USD</p>
                        </div>
                    </div>
                    {selectedUnit === 2 && (
                        <div style={{ marginLeft: "10%", paddingBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginRight: "35%" }}>
                                <p>Size</p>
                                <p>Colour</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <p>#1</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <p>#2</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='container' style={{ borderBottom: 'none' }} onClick={() => handleUnitChange(3)}>
                    <div className='main_content'>
                        <div className='amount'>
                            <div className='content'>
                                <input type='radio' name="unit" checked={selectedUnit === 3} readOnly />
                                <h5>3 Unit</h5>
                                <p>30% off</p>
                            </div>
                        </div>
                        <div className='price'>
                            <h5>$24.00 USD</h5>
                            <p>$24.00 USD</p>
                        </div>
                    </div>
                    {selectedUnit === 3 && (
                        <div style={{ marginLeft: "10%", paddingBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginRight: "35%" }}>
                                <p>Size</p>
                                <p>Colour</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <p>#1</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <p>#2</p>
                                <div className='size_content'>
                                    <select>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <div className='size_content'>
                                    <select>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <p style={{ marginRight: "40%", color: "#ff4081" }}>Free Delivery</p>
                <p>Total: $18.00 USD</p>
            </div>
            <button>+ Add to Cart</button>
        </div>
    );
}
