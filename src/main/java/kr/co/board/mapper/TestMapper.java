package kr.co.board.mapper;

import kr.co.board.vo.TestVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface TestMapper {
    int insertTest(TestVO test);
}
