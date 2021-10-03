<template>
    <div class="infomation">
        <div class="heading">
            <div class="coin">Buy Token</div>
            <div class="quote">Import USDT From Your Wallet:</div>
        </div>
        <div class="content">
            <div class="input">
                <a-input placeholder="0.0" size="large" />
                <div class="currency">
                    <div class="max">MAX</div>
                    <div class="tokens">
                        <img src="@image/icons/USDT.svg" alt="" />
                        <span>USDT</span>
                    </div>
                </div>
            </div>
            <div class="limit">Available limit: đây là gì? USDT</div>
            <div class="transactions">
                <div class="fee">
                    <div class="name">Transaction fee:</div>
                    <div class="figure">đây là gì? USDT</div>
                </div>
                <div class="total">
                    <div class="name">Total:</div>
                    <div class="figure">đây là gì? USDT</div>
                </div>
            </div>
            <div class="btn_action">
                <vs-button class="btn_approve" color="#6FCF97" @click="buyTokenButton">
                    Approve
                </vs-button>
                <vs-button class="btn_deposit" color="#0b9985" @clicks="$router.push('/dashboard/wallet/deposit')">
                    Deposit
                </vs-button>
            </div>
        </div>
        <div class="detail_title">Details</div>
        <div class="detail">
            <div class="token">
                <div>
                    <div class="items">
                        <a-row>
                            <a-col :span="12">
                                <div class="label">Total Rewards:</div>
                                <div class="label">Deposit Token:</div>
                                <div class="label">Deposit Period:</div>
                            </a-col>
                            <a-col :span="12">
                                <div>866667 Cloudz Token - đây là gì?</div>
                                <div>USDT - đây là gì?</div>
                                <div>1 hour(s) - đây là gì?</div>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>
            <div class="distribution">
                <div>
                    <div class="items">
                        <a-row>
                            <a-col :span="16">
                                <div class="label">Total USDT Deposited:</div>
                                <div class="label">Max. Deposit Available</div>
                                <div class="label">Your Share:</div>
                            </a-col>
                            <a-col :span="8">
                                <div>78000 - đây là gì?</div>
                                <div>1000 - đây là gì?</div>
                                <div>90% - đây là gì?</div>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>
        </div>
        <div class="time_remaining">
            <div class="title">Time Remaining</div>
            <div class="schedule">
                <div class="number">
                    {{ countdownData['day'] }}
                    <div class="times">Day</div>
                </div>
                <div>:</div>
                <div class="number">
                    {{ countdownData['hour'] }}
                    <div class="times">Hours</div>
                </div>
                <div>:</div>
                <div class="number">
                    {{ countdownData['minute'] }}
                    <div class="times">Minutes</div>
                </div>
                <div>:</div>
                <div class="number">
                    {{ countdownData['second'] }}
                    <div class="times">Seconds</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
			projectDetail: {
				type: Object,
				default: null,
				required: true
			}
		},
        data() {
            return {
                countdownData: {
                    'day': 0,
                    'hour': 0,
                    'minute': 0,
                    'second': 0
                }
            }
        },
        methods: {
            buyTokenButton() {
                alert('Bạn đã mua token này?????')
            },
            
        },
    }
</script>

<style lang="scss" scoped>
    @import "@asset/variables.scss";
    .landingpage {
        .infomation {
            padding: 50px 10%;
            background: linear-gradient(0deg, rgba(49, 180, 130, 0.05), rgba(49, 180, 130, 0.05)), rgba(251, 251, 251, 0.93);
            box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
            border-radius: 20px;
            border: 1px solid $green-black-02;
            height: 100% !important;
            .heading {
                color: $green-black-01;
                .coin {
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 24px;
                }
                .quote {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    margin: 20px 0 20px;
                }
            }
            .content {
                .input {
                    position: relative;
                    .currency {
                        position: absolute;
                        right: 10px;
                        top: 8px;
                        display: flex;
                        align-items: center;
                        .max {
                            font-weight: bold;
                            font-size: 14px;
                            line-height: 24px;
                            color: $green-black-01;
                        }
                        .tokens {
                            display: flex;
                            align-items: center;
                            img {
                                margin: 0 4px;
                                width: 24px;
                                height: 24px;
                            }
                        }
                    }
                    .ant-input {
                        box-sizing: border-box;
                        border-radius: 50px;
                        padding-left: 20px;
                        padding-right: 120px;
                    }
                }
                .limit {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: $grey-black-03;
                    text-align: right;
                }
                .transactions {
                    display: flex;
                    justify-content: center;
                    margin-top: 15px;
                    .fee {
                        border: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        border-radius: 5px;
                        padding: 20px;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                        display: flex;
                        margin: 0 20px;
                        .name {
                            color: $grey-black-03;
                        }
                        .figure {
                            margin-left: 10px;
                        }
                    }
                    .total {
                        border: 1px solid #6fcf97;
                        box-sizing: border-box;
                        border-radius: 5px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                        margin: 0 20px;
                        width: 237px;
                        .name {
                            color: $green-black-01;
                        }
                        .figure {
                            margin-left: 10px;
                            color: $green-black-01;
                        }
                    }
                }
                .btn_action {
                    display: flex;
                    justify-content: center;
                    margin-top: 15px;
                    .btn_approve {
                        background: #219653;
                        border-radius: 50px;
                        margin: 0 20px;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 24px;
                        padding: 2px 20px;
                    }
                    .btn_deposit {
                        margin: 0 20px;
                        border-radius: 50px;
                        margin: 0 20px;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 24px;
                        padding: 2px 20px;
                    }
                }
            }
            .detail_title {
                font-weight: bold;
                font-size: 18px;
                line-height: 24px;
                color: $green-black-01;
                margin: 20px 0;
            }
            .detail {
                display: flex;
                .title {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    color: $green-black-01;
                    margin-bottom: 20px;
                }
                .token {
                    width: 50%;
                }
                .distribution {
                    width: 50%;
                }
                .items {
                    border: 1px solid #e0e0e0;
                    box-sizing: border-box;
                    border-radius: 5px;
                    padding: 15px;
                    width: 90%;
                    font-size: 16px;
                    line-height: 24px;
                    .label {
                        font-weight: bold;
                    }
                }
            }
            .time_remaining {
                margin-top: 30px;
                .title {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    color: $green-black-01;
                    margin-bottom: 20px;
                }
                .schedule {
                    background: linear-gradient(0deg, rgba(7, 160, 121, 0.1), rgba(7, 160, 121, 0.1)), #f2f2f2;
                    font-weight: normal;
                    font-size: 64px;
                    line-height: 24px;
                    border: 1px solid #e0e0e0;
                    box-sizing: border-box;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    padding: 30px 0 10px;
                    .times {
                        color: $grey-black-02;
                        font-weight: 500;
                        font-size: 14px;
                        margin-top: 12px;
                        text-align: center;
                    }
                    .number {
                        margin: 0 15px;
                    }
                }
            }
            .btn_started {
                background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
                border-radius: 50px;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
                padding: 0 20px;
                margin: 30px auto 80px;
            }
        }
    }
</style>