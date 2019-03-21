<template>
	<div>
		<div v-for="(item, index) in Math.ceil(hangData.length/5)" :key="index">
            <!-- <div>{{index}}</div> -->
          <!-- 列表 --> 
            <div class="font-s14"> 

              <el-checkbox @change="checkHandle" v-model="checked">
                继任详情
              </el-checkbox> 
            </div> 
			
            <el-row style="position:relatve" type="" class="row-bg" justify="space-between"> 
              <el-col class="item-wrapper" v-for="(childItem, childIndex) in hangData" :key="childIndex"> 
                

                <div v-if="childIndex < (index + 1)*5 && childIndex >= (index)*5">
                <el-card body-style="padding:0" class="box-card"> 
                  <div class="titleColor"> 
                  </div> 
                  <div> 
                    <p class="textFirst">{{ childItem.title1 }}</p> 
                    <p class="textTwo">{{ childItem.department }}</p> 
                  </div> 

                  <div class="line"></div> 
                  <div class="name-wrapper clearfix" v-if="checked"> 
                    <div style="padding:0 13px" class="nameItem clearfix"> 
                      <div class="fl left"> 
                      <img src="" alt="" /> 0 ~ 6个月 
                      </div> 
                      <div class="fr right"> 
                        <p v-for="(nameItem, NameIndex) in childItem.name1" :key="NameIndex" class="textName">{{nameItem.nameChild}}</p> 
                      </div> 
                    </div> 

                    <div style="padding:0 13px" class="nameItem clearfix"> 
                      <div class="fl left"> 
                      <img src="" alt="" /> 6 ~ 12个月 
                      </div> 
                      <div class="fr right"> 
                        <p v-for="(nameItem, NameIndex) in childItem.name2" :key="NameIndex" class="textName">{{nameItem.nameChild}}</p> 
                      </div> 
                    </div> 

                    <div style="padding:0 13px" class="nameItem clearfix"> 
                      <div class="fl left"> 
                      <img src="" alt="" /> 12 ~ 24个月 
                      </div> 
                      <div class="fr right"> 
                        <p v-for="(nameItem, NameIndex) in childItem.name3" :key="NameIndex" class="textName">{{nameItem.nameChild}}</p> 
                      </div> 
                    </div> 
                  </div> 
                  <div class="telescopic">
                      <div class="dis-inl" @click="show(childItem.child, index, childIndex)">
                        收缩
                      </div>
                  </div>
                </el-card> 
                </div>



              <!-- 子元素 -->
                <div v-if="childItem.child.length > 0" >
                </div>
                <!-- 子元素end -->



              </el-col> 
            </el-row> 
			
			<el-row>
				<div style="border:1px blue solid;">
					<template v-if="!!data[index]">
						<hang ref="hangdo" :hangData="data[index]"></hang>
					</template>
				</div>
			</el-row>	
           	


          </div>
	</div>
</template>

<script>
	export default {
		props: ['hangData'],
		name: "hang",
		data(){
		    return {
		      checked: '',
		      emptyCard:'n',
		      emptySubtitle: 'n',
		      data: [],
          mark: []
		    }
		},
    mounted: function(){
      
    },
		methods: {
			cardHandle:function(index){
		        this.emptyCard = index
		    },
		    // 标题切换
		    subTitleHandle(index){
		        this.emptySubtitle = index
		    },
		    checkHandle(){
		        console.log(this.checked)
		    },
		    show: function(res, index, childIndex){
          //展开收起
          if(!this.mark[index]){
            this.mark[index] = [];
          };
          let mark = this.mark[index][childIndex];
          this.mark[index] = [];
          this.mark[index][childIndex] = mark;
          this.mark[index][childIndex] = !this.mark[index][childIndex];
          this.mark[index][childIndex] ? res = res : res = [];

          //设置数据
          this.$set(this.data, index, res );
          this.$nextTick(() => {
            if(!!this.$refs.hangdo){
              this.$refs.hangdo[index]['data'] = [];
              this.$refs.hangdo[index].mark = [];
            };
          });
		    }
		}
	}
</script>

<style scoped>
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