<template> 
  <div class="organizaList-wrapper"> 
    <div class="clearfix wrapper-index"> 
      <div> 
        <el-col> 
          <el-card body-style="font-size:14px;height:53px;padding:0;text-align:center;line-height:50px;" shadow="always">
            龙湖集团 
          </el-card> 
        </el-col> 
        <!-- 衬托标签 --> 
        <el-row type="flex" class="row-bg" justify="space-between"> 
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col> 
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col> 
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col> 
        </el-row> 
        <!-- end、 --> 
        <el-row type="flex" class="row-bg" justify="space-between"> 
          <el-col v-for="(item, index) in ['C1','C2','C3','C4','中台-平台']" :key="index" :span="4"> 
            <el-card @click.native="cardHandle(index)" :class="{cardColor: emptyCard == index}" class="pointer" body-style="font-size:14px;height:50px;padding:0;text-align:center;line-height:47px;" shadow="always">
              {{ item }} 
            </el-card> 
          </el-col> 
        </el-row> 
        <!-- main --> 
        <div> 
          <div style="position：relative;padding-left:15px;"> 
            <el-row style="width:500px" type="flex" class="row-bg" justify="space-between"> 
              <el-col v-for="(item, index) in ['人力中台','华东招采平台','财务共享平台','共应链管理平台']" :key="index" :span="5"> 
                <el-card @click.native="subTitleHandle(index)" :class="{cardColor: emptySubtitle == index}" class="pointer" body-style="width:104px;height:30px;padding:0;text-align:center;line-height:28px;" shadow="always">
                  {{ item }} 
                </el-card> 
              </el-col> 
            </el-row> 
          </div> 
			<hang :hangData="data"></hang>
          <!-- <div v-for="(item, index) in Math.ceil((data.length-1)/5)" :key="index"> -->
          
        </div> 
        <!-- end --> 
      </div> 
    </div> 
  </div> 
</template>
<script>
import hang from '@/views/system/hang';
export default {
  data(){
    return {
      checked: '',
      emptyCard:'n',
      emptySubtitle: 'n',
      data: [
        {
          title1: '标题1',
          department: '运营部',
          name1: [
            {
              nameChild: '张三1',
            },
            {
              nameChild: '张三11',
            }
          ],
          name2: [
            {
              nameChild: '张三2',
            },
            {
              nameChild: '张三22',
            }
          ],
          name3: [
            {
              nameChild: '张三3',
            },
            {
              nameChild: '张三33',
            }
          ],
          child: [
            {
              title1: '我是孩子',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: [
            {
              title1: '我是孩子啊啊啊',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: [
            {
              title1: '我666',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: []
            }
          ]
            }
          ]
            }
          ]
        },
        {
          title1: '标题11',
          department: '运营部1',
          name1: [
            {
              nameChild: '李四1',
            },
            {
              nameChild: '李四11',
            }
          ],
          name2: [
            {
              nameChild: '李四2',
            },
            {
              nameChild: '李四a',
            }
          ],
          name3: [
            {
              nameChild: '李四aa',
            },
            {
              nameChild: '李四aaa',
            }
          ],
          child: [
            {
              title1: '第二个',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: [
            {
              title1: '第二个的子级',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: []
            }
          ]
            }
          ]
        },
        {
          title1: '标题113',
          department: '运营部13',
          name1: [
            {
              nameChild: '张三123',
              nameChild: '李四123'
            }
          ],
          name2: [
            {
              nameChild: '张三223',
              nameChild: '李四223'
            }
          ],
          name3: [
            {
              nameChild: '张三323',
              nameChild: '李四323'
            }
          ],
          child: [
          ]
        },
        {
          title1: '标题113',
          department: '运营部13',
          name1: [
            {
              nameChild: '张三123',
              nameChild: '李四123'
            }
          ],
          name2: [
            {
              nameChild: '张三223',
              nameChild: '李四223'
            }
          ],
          name3: [
            {
              nameChild: '张三323',
              nameChild: '李四323'
            }
          ],
          child: [
          ]
        },
        {
          title1: '标题113',
          department: '运营部13',
          name1: [
            {
              nameChild: '张三123',
              nameChild: '李四123'
            }
          ],
          name2: [
            {
              nameChild: '张三223',
              nameChild: '李四223'
            }
          ],
          name3: [
            {
              nameChild: '张三323',
              nameChild: '李四323'
            }
          ],
          child: [
          ]
        },
        {
          title1: '标题1113',
          department: '运营部13',
          name1: [
            {
              nameChild: '张三123',
            }
          ],
          name2: [
            {
              nameChild: '张三223',
            }
          ],
          name3: [
            {
              nameChild: '张3',
            }
          ],
          child: [
            {
              title1: '下面的',
              department: '运营部',
              name1: [
                {
                  nameChild: '1张三1',
                },
                {
                  nameChild: '1张三11',
                }
              ],
              name2: [
                {
                  nameChild: '1张三2',
                },
                {
                  nameChild: '张三a',
                }
              ],
              name3: [
                {
                  nameChild: '张三aa',
                },
                {
                  nameChild: '张三aaa',
                }
              ],
              child: []
            }
          ]
        }
      ]
    }
  },
  mounted: function(){
  	console.log(this.data)
  },
  methods:{
    cardHandle:function(index){
        this.emptyCard = index
    },
    // 标题切换
    subTitleHandle(index){
        this.emptySubtitle = index
    },
    checkHandle(){
        console.log(this.checked)
    }
  },
  components: {
	'hang': hang
}
}
</script>
<style scoped lang="scss">
.fl{
  float: left;
}
.fr{
  float: right;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.clearfix:after{
  display: block;
  content: '';
  clear: both
}
.pointer{
  cursor:pointer
}
.cardColor{
  background: #363ab76e
}
.wrapper-index{
  margin: 0 auto;
  width:1200px;
  font-size: 12px;
  font-family: "微软雅黑";
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
  // list
  .text {
  font-size: 14px;
}
.titleColor{
  height:7px;
  background:red;
}

.el-card__body{
  padding: 0
}
.textFirst{
  text-align: center;
  font-size: 14px;
  margin-top: 11px;
  line-height: 19px;
}
.textTwo{
  text-align: center;
  font-size: 12px;
  color:#969595

}
.right{
  width:40px;
}
.line{
  height:2px;
  border-bottom:1px solid #ccc;

  margin-top:6px;
}
.font-s14{
  font-size: 14px;
}
.textName{
  line-height: 20px;
}
.name-wrapper{
  height:134px;
  overflow-y: auto;
}
.nameItem{
  margin-bottom:10px;
}
.add-item{
    position: absolute;
    top: 0px;
    line-height: 15px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    font-size: 26px;
  background:rgb(0, 157, 218);
}
.telescopic{
  text-align: right;
  font-size: 14px;
  cursor: pointer;
}
.dis-inl{
  display: inline-block
}
.item-wrapper{
  display: inline-block;
  width:207px;
  margin: 0 16px;
}
</style>
