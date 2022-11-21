import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Square from '../../../public/asset/SubscriptionIcon/Square.png'

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm" className='h-[1056px] w-full bg-[#FCFCFE]'>
                <div className='flex flex-row pt-[200px] pl-[256px]'>
                    <div className='w-[358px] h-[244px] bg-[#F6F7FC]  border-solid border-[#D6D9E4] rounded-3xl border-solid border-[1px] border-[#D6D9E4]'>
                        <p className='mt-[32px] ml-[26.5px] font-[600] leading-[150%] text-[20px] text-[#646D89]'> <img src={Square} className='inline mr-3' alt="" />Merry Membership</p>
                        <p className='ml-[26.5px] mt-[24px] w-[310px] flex justify-between ' ><span className='text-[16px] font-[400] text-[#646D89]'>Package</span><span className='text-[16px] font-[400] text-[#646D89] text-end'>Price (Monthly)</span></p>
                    </div>
                    <div className='flex flex-col ml-[22px] w-[548px] h-[554px] border-solid border-[1px] border-[#D6D9E4] rounded-3xl'>
                        <div className='h-[78px] justify-center text-[#646C80] font-[600] bg-[#F6F7FC] rounded-t-3xl'>
                            <p className='mt-[24px] ml-[24px] leading-[150%] text-[20px]'>Credit Card</p></div>
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                        />
                        <div className="">
                            <input
                                type="tel"
                                name="number"
                                className=""
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className=""
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="expiry"
                                    className=""
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="cvc"
                                    className=""
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}