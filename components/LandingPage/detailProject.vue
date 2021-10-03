<template>
    <div class="infomation" v-bind:class="{ incoming: projectDetail.sale_status == 1, finish: projectDetail.sale_status == 3 }">
        <div class="heading">
            <div class="coin">
                <img :src="projectDetail.logo" :alt="projectDetail.title" />
                {{ projectDetail.title }}
            </div>
            <div class="tag" v-if="projectDetail.sale_status == 1">
                <img src="@image/layouts/inccoming_tag.svg" :alt="projectDetail.title" />
            </div>
            <div class="tag" v-else-if="projectDetail.sale_status == 2">
                <img src="@image/icons/incoming_tag_sale.svg" :alt="projectDetail.title" />
            </div>
            <div class="tag" v-else>
                <img src="@image/icons/incoming_tag_finish.svg" :alt="projectDetail.title" `/>
            </div>
        </div>
        <div class="content">{{ projectDetail.description }}</div>
        <div class="detail">
            <div class="token">
                <div class="title">Token</div>
                <div>
                    <div class="items">
                        <a-row>
                            <a-col :span="12">
                                <div class="label">Token:</div>
                                <div class="label">Type:</div>
                                <div class="label">Total Supply:</div>
                                <div class="label">Initial Supply:</div>
                                <div class="label">Token Listing:</div>
                            </a-col>
                            <a-col :span="12">
                                <div>
                                    {{ projectDetail.token.title }}
                                </div>
                                <div>
                                    {{ projectDetail.platform.title }}
                                </div>
                                <div>{{ [projectDetail.supply, projectDetail.token.title].join(' ') }}</div>
                                <div>{{ [projectDetail.initial, projectDetail.token.title].join(' ') }}</div>
                                <div>Đây là gì?</div>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>
            <div class="distribution">
                <div class="title">Distributon</div>
                <div>
                    <div class="items">
                        <a-row>
                            <a-col :span="8">
                                <div class="label">Distribution:</div>
                                <div class="label">Vesting</div>
                            </a-col>
                            <a-col :span="16">
                                <div>Claimed on Coinpad</div>
                                <div>20% at TGE, and 20% each 2 weeks</div>
                            </a-col>
                        </a-row>
                        <div>Thiết kế chỗ này nghĩa là gi?</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="time_remaining" v-if="projectDetail.sale_status != 3">
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
        <div v-if="projectDetail.sale_status == 1">
            <vs-button class="btn_started" color="rgb(59,222,200)" @click="$emit('changePage', 'mission')">
                Register
            </vs-button>
        </div>
        <div v-else>
            <vs-button class="btn_started"  color="rgb(59,222,200)" @click="$emit('changePage', 'buy')">
                Invest Now
            </vs-button>
        </div>
        <!-- <div class="finish_overlay" v-if="tag == 'finish'"></div> -->
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
            
        },
    }
</script>

<style lang="scss" scoped>
    @import "@asset/variables.scss";
    .landingpage {
        .infomation {
            padding: 30px 10px;
            background: linear-gradient(0deg, rgba(49, 180, 130, 0.05), rgba(49, 180, 130, 0.05)),
                rgba(251, 251, 251, 0.93);
            box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
            border-radius: 20px;
            border: 1px solid $green-black-02;
            height: 100% !important;
            .heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
                display: flex;
                align-items: center;
                img {
                    width: 56px;
                    height: 56px;
                    margin-right: 5px;
                }
                .coin {
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 24px;
                }
                .tag {
                    img {
                        width: 100px;
                        height: 23px;
                    }
                }
            }
            .content {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: justify;
                margin: 15px 0;
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
                    width: 80%;
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
                    background: linear-gradient(0deg, rgba(7, 160, 121, 0.1), rgba(7, 160, 121, 0.1)),
                        #f2f2f2;
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